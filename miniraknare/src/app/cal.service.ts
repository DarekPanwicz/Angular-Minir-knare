import { Injectable } from '@angular/core';

@Injectable()
export class CalService {

  result: number;

  constructor() { 

    add(number1, number2){

      this.number = number1 + number2
    }

    minus(number1, number2){

      this.number = number1 - number2
    }

    multiply(number1, number2){

      this.number = number1 * number2
    }

    divide(number1, number2){

      this.number = number1 / number2
    }



  }

}
