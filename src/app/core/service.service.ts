import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }

  getDataTable() {
    const url = '../../assets/data/mentor.json';
    return this._http.get(url);
  }
  
  addDataTable(data:any) {
    const options = {Headers, responseType: 'json' as 'blob'};
    const url = '../../assets/data/mentor.json';
    return this._http.post(url,data,options);
  }
  deleteDataTable() {
    const url = '../../assets/data/mentor.json';
    return this._http.get(url);
  }
  editDataTable() {
    const url = '../../assets/data/mentor.json';
    return this._http.get(url);
  }
}
