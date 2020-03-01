import { Component } from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [

    trigger('numbers', [
      transition('* => *', [
        query(':enter', style({opacity:0}), {optional:true}),

        query(':enter', stagger('2.94s', [
          animate('.6s ease-in', keyframes([
            style({opacity:0, transform: 'translateY(-75%)', offset:0}),
            style({opacity:.5, transform: 'translateY(35px)', offset:.3}),
            style({opacity:1, transform: 'translateY(0)', offset:1}),
          ]))
        ]), {optional:true})
      ])
    ])
  ]
})
export class AppComponent {
  n: number;
  array = [];

  constructor(){}

  ngOnInit(){

  }

  start(){
     this.array.splice(0,this.array.length);
     this.array= this.getFibNum(this.n);
  }

  private getFibNum(n) {
    const fib= [];
    if(n>=2){
     fib.push(1);
     fib.push(1);
    }
    if(n==1){
      fib.push(1);
    }
    else if(n==0){}
    function getFib(n) {
      const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
      if (n > fib.length) {
        fib.push(nextFib);
        getFib(n);
      }
    }
    getFib(n);
    return fib;
  }
}
