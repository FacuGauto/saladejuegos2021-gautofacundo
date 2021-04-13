import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pptijera',
  templateUrl: './pptijera.component.html',
  styleUrls: ['./pptijera.component.css']
})
export class PptijeraComponent implements OnInit {
  resultado: string;
  puntosUsuario: number;
  puntosComputadora: number;

  constructor() { 
    this.resultado = 'Esperando jugada...';
    this.puntosUsuario = 0;
    this.puntosComputadora = 0;
  }

  ngOnInit(): void {
    console.log(this.puntosUsuario);
  }

  getComputerChoice(): string {
    const choices = ['r', 'p', 's']; // Roca, Pape, Tijeras
    const randomChoice = Math.floor(Math.random() * 3);
    console.log(choices[randomChoice]);
    return choices[randomChoice];
  }

  game(userChoice: string): { message: string; userAdd: number;compAdd: number;}{
    const playUserComp = userChoice + this.getComputerChoice();
    console.log(`Jugada realizada: ${playUserComp}`);
    let playStatus: {
      message: string;
      userAdd: number;
      compAdd: number;
    };
    playStatus = {
      message: 'Inicio',
      userAdd: -1,
      compAdd: -1,
    };
    switch (playUserComp) {
      // Ganamos
      case 'rs':
      case 'sp':
      case 'pr':
        playStatus = {
          message: 'Ganas a la computadora',
          userAdd: 1,
          compAdd: 0,
        };
        break;
      // Gana la computadora
      case 'rp':
      case 'ps':
      case 'sr':
        playStatus = {
          message: 'Gana la computadora',
          userAdd: 0,
          compAdd: 1,
        };
        break;
      // Empatamos
      case 'rr':
      case 'pp':
      case 'ss':
        playStatus = {
          message: 'Habéis elegido la misma jugada y habéis empatado',
          userAdd: 0,
          compAdd: 0,
        };
        break;
    }
    return playStatus;
  }

  play(choice: string): void {
    const result = this.game(choice);
    this.resultado = result.message;
    this.puntosUsuario += result.userAdd;
    this.puntosComputadora += result.compAdd;
  }

}
