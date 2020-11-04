import { Component, OnInit } from '@angular/core';

import {ServicioService} from '../servicio.service'
import {Router} from '@angular/router';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombre: String="";
  apellido: String="";
  ciudad: String="";
  correo: String="";
  sexo: String="";
  nickname: String="";
  contrasena: String="";
  contrasena2: String="";
  terminos:boolean=false;

  constructor(public servicio: ServicioService, private router: Router) { }

  ngOnInit(): void {
  }

  validarCampos(){

    var validacion=true;
  
    if(this.nombre==""){
      validacion=false;
    }
    if(this.apellido==""){
      validacion=false;
    }
    if(this.ciudad==""){
      validacion=false;
    }
    if(this.correo==""){
      validacion=false;
    }
    if(this.sexo==""){
      validacion=false;
    }

    if(this.nickname==""){
      validacion=false;
    }

    if(this.contrasena==""){
      validacion=false;
    }
    if(this.contrasena2==""){
      validacion=false;
    }   

    
    return validacion;
  }

  validarContraseña(){
    var respuesta=true;
    if(this.contrasena!=this.contrasena2){
      respuesta=false;
    }
    return respuesta;
  }

  registrarse(){
    var validacion=this.validarCampos();
    var validacionContraseña=this.validarContraseña();
    console.log(validacion);
    if(this.terminos){
      if(validacionContraseña){
        
     

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
    this.router.navigateByUrl('/descarga');
     });
    }
    else{
      alert("Error, debe llenar todos los campos.")
    }
  }
  else{
    alert("Error, las contraseñas no coinciden");
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
