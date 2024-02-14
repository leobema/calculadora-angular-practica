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
  inputText = '';

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
    debugger
    {
    this.inputText = (this.resultado, eval(this.inputText)); 
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

   condition(){
    const hola = this.inputText.slice(this.inputText.length -2)
    if ( 
      hola === '**' || 
      hola === '++' || 
      hola === '--' || 
      hola === '..' || 
      hola === '//' ||
      hola === '.*' ||
      hola === './' ||
      hola === '.+' ||
      hola === '.-' ||
      hola === '*.' ||
      hola === '*+' ||
      hola === '*-' ||
      hola === '*/' ||
      hola === '+.' ||
      hola === '+/' ||
      hola === '+-' ||
      hola === '-.' ||
      hola === '-*' ||
      hola === '-+' || 
      hola === '-/' || 
      hola === './' ||
      hola === '+*' ||
      hola === '/.' ||
      hola === '/+' ||
      hola === '/-' ||
      hola === '/*'
      ){
    this.button('Del');
    } 
  } 

     
  

}
