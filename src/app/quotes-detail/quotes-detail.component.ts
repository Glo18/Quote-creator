import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})

  
export class QuotesDetailComponent implements OnInit {
  @Input() quote : Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean) {
    this.isComplete.emit(complete);
  }

  downvote = 0;
  upvote = 0

  voteDown() {
    this.downvote = this.downvote + 1;
  }

  voteUp() {
    this.upvote = this.upvote + 1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
