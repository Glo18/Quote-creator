import { Component, OnInit } from '@angular/core';
import * as quotes from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:quotes.Quotes[]=[
    new quotes.Quotes(1,'By Martin Luther King','"Our lives begin to end the day we become silent about things that matter."',new Date(2020/8/31)),
    new quotes.Quotes(2,'By Oprah Winfrey','"Passion is energy. Feel the power that comes from focusing on what excites you."',new Date(2020/1/17)),
    new quotes.Quotes(3,'By Robin Sharma','“Everything is created twice, first in the mind and then in reality."',new Date(2000/8/30)),
    new quotes.Quotes(4,'By Chinua Achebe','"One of the truest tests of integrity is its blunt refusal to be compromised."',new Date(2015/3/14)),
    new quotes.Quotes(5,'By Nelson Mandela','“Resentment is like drinking poison and then hoping it will kill your enemies.”',new Date(2020/6/16)),
  ]



  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

 
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
      this.quotes.splice(index, 1);
      }
    }
  } 


  constructor() { }

  ngOnInit() {
  }

}
