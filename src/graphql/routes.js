import { gql } from '@apollo/client'

export const RouteFragment = gql`
    fragment Route on Route {
        route_id
        route_label
    }
`

export const DirectionFragment = gql`
    fragment Direction on Direction {
        direction_id
        direction_name
    }
`
export const StopsFragment = gql`
    fragment Stops on Stops {
        description
        latitude
        longitude
        place_code
        stop_id
    }
`

export const DepartureFragment = gql`
    fragment Departure on Departure {
        actual
        departure_text
        departure_time
        description
        direction_id
        direction_text
        route_id
        route_short_name
        schedule_relationship
        stop_id
        trip_id
    }
`

export const Get_Routes = gql`
    query getRoutes {
        getRoutes {
            ...Route
        }
    }
    ${RouteFragment}
`

export const Get_Direction = gql`
    query getDirection($route_id: Int) {
        getDirection (route_id: $route_id) {
            ...Direction
        }
    }
    ${DirectionFragment}
`

export const Get_Stops = gql`
    query getDirectionStops ($direction_id: Int, $route_id: Int) {
        getDirectionStops (route_id: $route_id, direction_id: $direction_id) {
            ...Stops
        }
    }
    ${StopsFragment}
`
export const GetDepartureStops = gql`
    query getDepartureStops ($route_id: Int, $direction_id: Int, $place_code: String) {
        getDepartureStops (route_id: $route_id, direction_id: $direction_id, place_code: $place_code) {
            departures {
                ...Departure
            }
            stops {
                ...Stops
            }
        }

    }
    ${DepartureFragment}
    ${StopsFragment}
`
