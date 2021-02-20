
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { URL } from 'apollo-server-env';

export type ValueOrPromise<T> = T | Promise<T>

export default class ApiClient extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://svc.metrotransit.org/nextripv2/';
	}
	resolveUrl(request: RequestOptions): ValueOrPromise<URL> {
		this.baseURL
		return super.resolveURL(request)
	}
}
