import { Component } from '@angular/core';
import { Calculadora } from '../modelos/calculadora.model';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})


export class CalculadoraComponent {



  calculadoras: Calculadora[] = [
  ]

  numeroUnoInput: number = 0;
  numeroDosInput: number = 0;
  resultado:number = 0;


  sumar() {
    this.resultado = this.numeroUnoInput + this.numeroDosInput;
  }

  restar() {
    this.resultado = this.numeroUnoInput - this.numeroDosInput;
  }

  multiplicar() {
    this.resultado = this.numeroUnoInput * this.numeroDosInput;
  }

  dividir() {

      if (this.numeroDosInput == 0){
        alert("Numero Dos debe ser mayor a 0")


      }else {
        this.resultado = this.numeroUnoInput / this.numeroDosInput;
      }
  }

  potencia(){
    this.resultado = Math.pow(this.numeroUnoInput, this.numeroDosInput)
  }

}
