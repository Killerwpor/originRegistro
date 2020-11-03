import { Component, OnInit } from '@angular/core';

import {ServicioService} from '../servicio.service'



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombre: String;
  apellido: String;
  ciudad: String;
  correo: String;
  sexo: String;
  nickname: String;
  contrasena: String;
  contrasena2: String;
  terminos:boolean=false;

  constructor(public servicio: ServicioService) { }

  ngOnInit(): void {
  }

  validarCampos(){
    return true;
  }

  registrarse(){
    var validacion=this.validarCampos();
    if(this.terminos){

      if(validacion){

     
    
    var data={
      nombre: this.nombre,
      apellido: this.apellido,
      ciudad: this.ciudad,
      correo: this.correo,
      sexo: this.sexo,
      nickname: this.nickname,
      contrasena: this.contrasena,
      contrasena2: this.contrasena2      
    };
    
    this.servicio.registrarUsuario(data).subscribe(result => {
    alert("Se ha registrado con éxito!")
     });
    }
  }
    else{
      alert("Debe aceptar los terminos para poder registrarse.")
    }
  }

  onItemChange(event){
    this.sexo=event.target.value;
  }

  aceptarTerminos(event){
    if(event.target.value=="acepto"){
      this.terminos=true;

    }
  }


}
