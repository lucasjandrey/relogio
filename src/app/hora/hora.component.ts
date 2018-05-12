import { Component, OnInit } from '@angular/core';
import {DataHora} from './gera.data.hora';

@Component({
  selector: 'app-hora',
  templateUrl: './hora.component.html',
  styleUrls: ['./hora.component.css']
})
export class HoraComponent implements OnInit {
  hora ='';
  constructor() { }
  ngOnInit() {
    setInterval(() => { 

     this.hora = DataHora.geraDataHora();
    }, 1000)
  }
}
