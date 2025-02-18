import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  add(data: any) {
    return this.httpClient.post(this.url + "/warehouse/add", data, {
       headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  update(data: any) {
    return this.httpClient.post(this.url + "/warehouse/update", data,  {
       headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  getWarehouses() {
    return this.httpClient.get(this.url + "/warehouse/get");
  }

  updateStatus(data: any) {
    return this.httpClient.post(this.url + "/warehouse/updateStatus", data,  {
       headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  delete(id: any) {
    return this.httpClient.delete(this.url + "/warehouse/delete/" + id, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
   })
  }

  getWarehouseById(id: any) {
    return this.httpClient.get(this.url + "/warehouse/getWarehouseById/" + id);
  }

}
