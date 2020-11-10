import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-descarga',
  templateUrl: './descarga.component.html',
  styleUrls: ['./descarga.component.css']
})
export class DescargaComponent implements OnInit {

  appstore: boolean=false;
  playstore: boolean=false;
  mac: boolean=false;
  windows: boolean=true;

  constructor() { }

  ngOnInit(): void {
  }


}
