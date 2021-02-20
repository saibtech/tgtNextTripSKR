import { Arg, Ctx, Int, Query, Resolver } from "type-graphql";
import { DepartureStops, Direction, Route, Stops } from "./trip-types";

@Resolver(() => Route)
export class RoutesResolver {
	@Query(() => [Route])
	async getRoutes(@Ctx() { dataSources }: any): Promise<[Route]> {
		return await dataSources.routes.getRoutes()
	}
}

@Resolver(() => Direction)
export class DirectionResolver {
	@Query(() => [Direction])
	async getDirection(@Arg("route_id", () => Int) routeId: number, @Ctx() { dataSources }: any) {
		return await dataSources.routes.getRoutesDirection(routeId)
	}
}

@Resolver(() => Stops)
export class StopsResolver {
	@Query(() => [Stops])
	async getDirectionStops(@Arg("route_id", () => Int) routeId: number, @Arg("direction_id", () => Int) directionId: number, @Ctx() { dataSources }: any) {
		return await dataSources.routes.getRoutesDirectionStops(routeId, directionId)
	}
}

@Resolver(() => DepartureStops)
export class DepartureStopsResolver {
	@Query(() => DepartureStops)
	async getDepartureStops(@Arg("route_id", () => Int) routeId: number,
		@Arg("direction_id", () => Int) directionId: number,
		@Arg("place_code") placeCode: string,
		@Ctx() { dataSources }: any) {
		return await dataSources.routes.getDepartureStops(routeId, directionId, placeCode)
	}
}
