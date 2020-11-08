import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})


  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}