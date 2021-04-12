import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  //@ViewChild("button") miboton: ElementRef;
  private turno;
  tablero:string[];

  constructor() {
    this.turno = 0;
    this.tablero = [];
   }

  ngOnInit(): void {
    let btnPulsado = (e:any,pos:number) =>{
      //console.log(tablero);
      this.turno ++;
      const btn = e.target;
      const color = this.turno %2 ? 'red':'green';
      btn.style.backgroundColor = color;
      this.tablero[pos] = color;
      console.log(pos);
      console.log(this.tablero);
      if (haGanado()){
          alert(`Ha ganado el jugador ${color}`);
          document.querySelectorAll('button').forEach(
              obj => obj.style.backgroundColor = 'black'
          );
          this.tablero = [];
          this.turno = 0;
      };
  }
  
   let haGanado = ():boolean =>{
      if(this.tablero[0] == this.tablero[1] && this.tablero[0] == this.tablero[2] && this.tablero[0]){
          return true;
      }else if(this.tablero[3] == this.tablero[4] && this.tablero[3] == this.tablero[5] && this.tablero[3]){
          return true;
      }else if(this.tablero[6] == this.tablero[7] && this.tablero[6] == this.tablero[8] && this.tablero[6]){
          return true;
      }else if(this.tablero[0] == this.tablero[3] && this.tablero[0] == this.tablero[6] && this.tablero[0]){
          return true;
      }else if(this.tablero[1] == this.tablero[4] && this.tablero[1] == this.tablero[7] && this.tablero[1]){
          return true;
      }else if(this.tablero[2] == this.tablero[5] && this.tablero[2] == this.tablero[8] && this.tablero[2]){
          return true;
      }else if(this.tablero[0] == this.tablero[4] && this.tablero[0] == this.tablero[8] && this.tablero[0]){
          return true;
      }else if(this.tablero[2] == this.tablero[4] && this.tablero[2] == this.tablero[6] && this.tablero[2]){
          return true;
      }
      return false;
  }
  
  
  
  document.querySelectorAll('button').forEach(
      (obj,i) => obj.addEventListener('click', (e) => btnPulsado(e,i))
  );
  }

  

}
