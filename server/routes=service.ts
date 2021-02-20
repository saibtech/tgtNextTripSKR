import ApiClient from "./service";
export default class RoutesService extends ApiClient {
	async getRoutes() {
		return this.get(`routes`)
	}

	async getRoutesDirection(routeId: number) {
		return this.get(`directions/${routeId}`)
	}

	async getRoutesDirectionStops(routeId: number, directionId: number) {
		return this.get(`stops/${routeId}/${directionId}`)
	}

	async getDepartureStops(routeId: number, directionId: number, placeCode: string) {
		return this.get(`${routeId}/${directionId}/${placeCode}`)
	}
}