import { signal } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './app.html',
  
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calculator');

  stringToEvaluate:string = '';

  takeInput(num:string){
    this.stringToEvaluate = this.stringToEvaluate + num;
    console.log(this.stringToEvaluate);
  }

  evaluateResult(){
   if(this.stringToEvaluate != ''){
    this.stringToEvaluate = eval(this.stringToEvaluate)
   }
  }

  resetInput(){
    this.stringToEvaluate = '';
  }
}
