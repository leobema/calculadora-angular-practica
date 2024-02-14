import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  inputText: string = '';
  

  constructor(){
      
  }

 

  button(btn: String): void {
    if (btn === 'Del') {
      this.inputText = this.inputText.substring(0, this.inputText.length - 1)
    } else if (btn === 'C' || btn === 'CE') {
      this.inputText = ''
    } else {
      this.inputText += btn
    }
  }

  resultado(btn: String) {
    if (btn === '=')
    {
    this.inputText = (0, eval)(this.inputText);
    this.inputText 
    }
  }  

 

  consition2(){
    if (
      this.inputText === '*' ||
      this.inputText === '+' ||
      this.inputText === '-' ||
      this.inputText === '.' ||
      this.inputText === '/' 
      ){
    this.inputText = ''; 
  }
   }

  condition() {
    if (typeof this.inputText === 'string') {
      const hola = this.inputText.slice(-2);
  
    const patrones = ['**', '++', '--', '..', '//', '.*', './', '.+', '.-', '*.', '*+', '*-', '*/', '+.', '+/', '+-', '-.', '-*', '-+', '-/', './', '+*', '/.', '/+', '/-', '/*'];
  
    if (patrones.includes(hola)) {
      this.button('Del');
    }
  }

     
}

}
