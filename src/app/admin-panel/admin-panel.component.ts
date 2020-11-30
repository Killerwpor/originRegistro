import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import {ServicioService} from '../servicio.service'

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  contrasena: String="";
  nickname: String="";
  isLogin: Boolean=false;
  connectToGameLift: String="";
  accessKeyID: String="";
  secretKey: String="";
  fleetID: String="";
  serverIP: String="";
  serverPort: String="";






  

  constructor(public servicio: ServicioService, private modalService: NgbModal) {


    

   }

  ngOnInit(): void {
  }

  login(){
   let data={
     email: this.nickname,
     password: this.contrasena
    }
    this.servicio.loginAdmin(data).subscribe(result => {
  
      if(result.type=="supervisor" || result.type=="developer"){
        this.isLogin=true;
      }
      else{      
     alert("Usuario o contraseña incorrecta");
        }
     });
  }

  loginConfirmation(){
    let data={
      email: this.nickname,
      password: this.contrasena
     }
     this.servicio.loginAdmin(data).subscribe(result => {
   
       if(result.type=="supervisor" || result.type=="developer"){

        let dataServer={          
          connectToGameLift: this.connectToGameLift,
          accessKeyID: this.accessKeyID,
          secretKey: this.secretKey,
          fleetID: this.fleetID,
          serverIP: this.serverIP,
          serverPort: this.serverPort
        }

        this.servicio.editServerInfo(dataServer).subscribe(result => {

      

          alert("Datos cambiados");
          this.modalService.dismissAll()
        })
       
       }
       else{      
      alert("Usuario o contraseña incorrecta");
         }
      });
   }

  cambiarValores(){
    alert("Valores cambiados");
  }


  @ViewChild('confirmationModal') confirmationModal : TemplateRef<any>; // Note: TemplateRef
  @ViewChild('passwordModal') passwordModal : TemplateRef<any>; // Note: TemplateRef


  openModal(modal){
    this.modalService.dismissAll()
    switch(modal){
      case 'password':
        this.modalService.open(this.passwordModal);
        break;
        case 'confirmation':
        this.modalService.open(this.confirmationModal);
        break;

    }
   
  }

}
