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
  contraseñaSegura:boolean=false;
  mensajeContrasenaInsegura: String=""

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

  scorePassword(pass) {
    var score: number= 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    var variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return score;
}

 checkPassStrength(pass) {
    var score = this.scorePassword(pass);
return score;
}

keyPress(event: KeyboardEvent) {
  console.log("entró");
  var seguridadContraseña=this.checkPassStrength(this.contrasena);
  if(seguridadContraseña>60){
    this.contraseñaSegura=true;
    this.mensajeContrasenaInsegura="";
  }
  else{
   this.mensajeContrasenaInsegura=" Contraseña demasiado debil";
  }
}

  registrarse(){
    var validacion=this.validarCampos();
    var validacionContraseña=this.validarContraseña();
   if(this.contraseñaSegura){
     
   
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
      var dataAux={
        email: this.correo,
        emailRegistro: this.correo,
        contrasenaRegistro: this.contrasena
     
      };
      this.servicio.enviarEmail(dataAux).subscribe(result => {
      
         });
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
  else{
    alert("Debe ingresar una contraseña más segura")
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
