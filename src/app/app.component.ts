import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  inputText = '';
  

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
    if (btn === '=') {
    this.inputText = (this.resultado, eval(this.inputText))
    }
  } 
}
