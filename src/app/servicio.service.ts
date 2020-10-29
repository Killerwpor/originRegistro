import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  });

  private url: string = "http://ec2-18-219-168-178.us-east-2.compute.amazonaws.com/api/api/microRelatos/generarMicroRelato";

  registrarUsuario(data: any): Observable<any> { 
    const body = new HttpParams().set(`data`, JSON.stringify(data));    
      
        return this.http.post<any>(this.url, body.toString(), {
          headers: this.httpHeaders 
        });
      
    
  }

}
