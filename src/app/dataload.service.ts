import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})
export class DataloadService {
  constructor(private http: HttpClient) {


  }

  baseurl = 'https://www.anapioficeandfire.com/api';
  printToConsole(arg) {
    console.log(arg);
  }

getallbooks(): Observable<any> {
  return this.http.get<any[]>(this.baseurl + '/books');
}

getallcharacters(): Observable<any> {
  return this.http.get<any[]>(this.baseurl + '/characters');
}

getallhouses(): Observable<any> {
  return this.http.get<any[]>(this.baseurl + '/houses');
}

 getSingleItem(entityName, id): Observable<any> {
  return this.http.get(`${this.baseurl}/${entityName}/${id}`);
}

}
