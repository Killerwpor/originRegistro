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

  private url: string = "https://backendspectra.herokuapp.com/api/user/saveUser";

  registrarUsuario(data: any): Observable<any> { 
    console.log("entró");
    let body = new FormData();
  

    body.append('type', "student");
    body.append("email", data.correo);
    body.append("name", data.nombre);
    body.append("lastName", data.apellido);
    body.append("gender", data.sexo);
    body.append("company", "Origin");
    body.append("password", data.contrasena);
    body.append("city", data.ciudad);
    body.append("nickname", data.nickname);
    body.append("simulatorsLength", "1");
    body.append('simulators', "Origin")  

    return this.http.post<any>(this.url,body);
  }
    
  
  
   
      
    
  }


