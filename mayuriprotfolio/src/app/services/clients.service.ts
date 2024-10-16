import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  baseUrl = 'http://localhost:8084';

  constructor(private http: HttpClient) { }

  createContact(Clients:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/add`,Clients);
  }
}
// 
  //http client get the url of server side which is springboot portvalues
  // baseUrl = 'http://localhost:8082';
  // //import httpClietModule 
  // constructor(private http: HttpClient) { }

  // createPlayer(player:Object):Observable<Object>{
  //   return this.http.post(`${this.baseUrl}/save`,player);

  // }