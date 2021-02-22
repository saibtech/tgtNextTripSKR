/* eslint-disable camelcase */
import { useLazyQuery, useQuery } from '@apollo/client'
import React, { Fragment, useReducer } from 'react'
import Select from '../components/Select'
import Table from '../components/Table'
import { GetDepartureStops, GET_DIRECTION, GET_ROUTES, GET_STOPS } from '../graphql/routes'
import { stateReducer } from '../utils'
import { Card, CustomSelect, PageContainer, SelectContainer, StopDescription } from './styles'

const Home = () => {
  const { loading, data } = useQuery(GET_ROUTES)
  const [getDirection, { loading: directionLoading, data: directionData }] = useLazyQuery(GET_DIRECTION)
  const [getStops, { data: stopsData }] = useLazyQuery(GET_STOPS)
  const [getDepartureStops, { loading: departureStopsLoading, data: departureStopsData }] = useLazyQuery(GetDepartureStops)
  const initialState = {
    route: null,
    direction: null,
    stop: null
  }
  const [{ route, direction, stop }, dispatch] = useReducer(stateReducer, initialState)

  const getRoutesSelection = () => data.getRoutes.reduce((accum, curr) => {
    accum[curr.route_id] = curr.route_label
    return accum
  }, {})
  const getDirectionSelection = () => directionData.getDirection.reduce((accum, curr) => {
    accum[curr.direction_id] = curr.direction_name
    return accum
  }, {})
  const getStopsSelection = () => stopsData.getDirectionStops.reduce((accum, curr) => {
    accum[curr.place_code] = curr.description
    return accum
  }, {})
  const onChangeRoute = (id) => {
    if (id !== route) {
      getDirection({ variables: { route_id: parseInt(id) } })
      dispatch({ type: 'MERGE', route: id, direction: null, stop: null })
    }
  }
  const onChangeDirection = (id) => {
    getStops({ variables: { route_id: parseInt(route), direction_id: parseInt(id) } })
    dispatch({ type: 'MERGE', direction: id, stop: null })
  }

  const onChangeStops = (id) => {
    getDepartureStops({ variables: { route_id: parseInt(route), direction_id: parseInt(direction), place_code: id } })
    dispatch({ type: 'MERGE', stop: id })
  }

  const getDepartureData = () => !departureStopsLoading && departureStopsData?.getDepartureStops?.departures?.map(elem => {
    return {
      route: `${elem.route_short_name}${elem.terminal}`,
      description: elem.description,
      departure_text: elem.departure_text
      // actual: elem.actual
    }
  })

  return (
    <Fragment>
      <PageContainer>
        <Card>
          <div style={{ padding: '20px' }}>

            <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '700' }}>Real-time Departures</h2>
            {loading ? <div>Loading....</div>

              : <SelectContainer>
                <CustomSelect>
                  <Select style={{ margin: '0 auto 1rem' }} items={getRoutesSelection()} selection={getRoutesSelection()[route]} action={onChangeRoute} />
                </CustomSelect>
                <CustomSelect>
                  {route ? directionLoading ? <div>Loading...</div> : directionData && <Select items={getDirectionSelection()} selection={getDirectionSelection()[direction]} action={onChangeDirection} /> : null}

                </CustomSelect>

                <CustomSelect>
                  {stopsData?.getDirectionStops && < Select items={getStopsSelection()} selection={getStopsSelection()[stop]} action={onChangeStops} />}

                </CustomSelect>
              </SelectContainer>
            }
            {

              stop && departureStopsData &&
          <div>
            <StopDescription>
              <h3 className="stop-name">{getStopsSelection()[stop]}</h3>
              <span className="stop-number"><strong style={{ fontWeight: '600', fontSize: '18px', textAlign: 'center' }}>Stop #:</strong>{stop}</span>
            </StopDescription>
            {
              <Table data={{ columns: ['ROUTE', 'DESTINATION', 'DEPARTS'], data: getDepartureData() }}></Table>
            }

          </div>

            }
          </div>
        </Card>
      </PageContainer>

    </Fragment >
  )
}

export default Home
