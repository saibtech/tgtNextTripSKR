import { useLazyQuery, useQuery } from '@apollo/client'
import React, { Fragment, useState } from 'react'
import Select from "../components/Select"
import { GetDepartureStops, Get_Direction, Get_Routes, Get_Stops } from "../graphql/routes"
import { Card, CustomSelect, PageContainer, SelectContainer, StopDescription, StyledWifi } from "./styles"
import "./table.scss"

const Home = () => {
  const { loading, data, error } = useQuery(Get_Routes)
  const [getDirection, { loading: directionLoading, data: directionData, error: directionError }] = useLazyQuery(Get_Direction)
  const [getStops, { loading: stopsLoading, data: stopsData, error: stopsError }] = useLazyQuery(Get_Stops)
  const [getDepartureStops, { loading: departureStopsLoading, data: departureStopsData }] = useLazyQuery(GetDepartureStops)
  const [route, setRoute] = useState()
  const [direction, setDirection] = useState()
  const [stop, setStop] = useState()

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
      setRoute(id)
    }
  }
  const onChangeDirection = (id) => {
    getStops({ variables: { route_id: parseInt(route), direction_id: parseInt(id) } })
    setDirection(id)
  }

  const onChangeStops = (id) => {
    getDepartureStops({ variables: { route_id: parseInt(route), direction_id: parseInt(direction), place_code: id } })
    setStop(id)
  }

  const getDepartureData = () => !departureStopsLoading && departureStopsData?.getDepartureStops?.departures?.map(elem => {
    return {
      route: `${elem.route_short_name}${elem.terminal}`,
      description: elem.description,
      departure_text: elem.departure_text,
      actual: elem.actual
    }

  })

  return (
    <Fragment>
      <PageContainer>
        <Card>
          <div style={{padding: "20px"}}>

          
            <h2 style={{ textAlign: "center", fontSize:"32px", fontWeight: "700"}}>Real-time Departures</h2>
        {loading ? <div>Loading....</div> :
               
            <SelectContainer>
              <CustomSelect>
                  <Select style={{ margin: "0 auto 1rem" }} items={getRoutesSelection()} selection={getRoutesSelection()[route]} action={onChangeRoute} />
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
              <span className="stop-number"><strong style={{ fontWeight: "600", fontSize: "18px", textAlign: "center"}}>Stop #:</strong>{stop}</span>
            </StopDescription>
            <table className="table departures-table">
              <thead className={"table head"}>
                <tr>
                  <th className="route">Route</th>
                  <th className="destination">Destination</th>
                  <th className="departs text-right">Departs</th>
                </tr>
              </thead>
              <tbody>
                {getDepartureData().map(({ route_short_name, description, departure_text, actual }) => {
                  return <tr className="departure" style={{ display: "table-row !important" }}>
                    <td className="route-number mr-2">{route}</td>
                    <td className="route-name">{description}</td>
                    <td className="depart-time ml-auto">
                      {actual && <StyledWifi />}
                      <span>{departure_text}</span></td>
                  </tr>
                })}
              </tbody>
            </table>

          </div>


        }
        </div>
        </Card>
      </PageContainer>

    </Fragment >
  )
}

export default Home
