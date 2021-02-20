import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class Route {
	@Field()
	agency_id!: number

	@Field()
	route_id?: string

	@Field()
	route_label?: string
}
@ObjectType()
export class Direction {
	@Field()
	direction_id: number
	@Field()
	direction_name: string
}
@ObjectType()
export class Stops {
	@Field()
	place_code: string
	@Field()
	description: string
	@Field()
	stop_id: number
	@Field()
	latitude: number
	@Field()
	longitude: number

}
@ObjectType()
export class Departure {
	@Field()
	actual: boolean
	@Field()
	departure_text: string
	@Field()
	departure_time: number
	@Field()
	description: string
	@Field()
	direction_id: number
	@Field()
	direction_text: string
	@Field()
	route_id: string
	@Field()
	route_short_name: string
	@Field()
	schedule_relationship: string
	@Field()
	stop_id: number
	@Field()
	trip_id: string
}

@ObjectType()
export class DepartureStops {
	@Field(() => [Departure])
	departures: Departure[]
	@Field(() => [Stops])
	stops: Stops[]
}