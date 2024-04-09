import { Injectable, Injector } from '@angular/core';
import { ApiUrls } from '@app/config/api-urls';
import { HttpService, ApiMethod } from '../http/http-service.service';
import { environment as env } from '@env';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpService: HttpService;
  baseUrl: string;
  endpointUrl: string;


  constructor(private injector: Injector) { 
    this.httpService = this.injector.get(HttpService);
    this.baseUrl = env.apiBaseUrl;
    this.endpointUrl = this.baseUrl + ApiUrls.products;
  }

  getProducts() {
    return this.httpService.requestCall(`${this.endpointUrl}`, ApiMethod.GET);
  } 

  getProductById(id: number) {
    let url = `${this.endpointUrl}/${id}`;
    return this.httpService.requestCall(url, ApiMethod.GET);
  }
}
