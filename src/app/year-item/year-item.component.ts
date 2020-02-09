
import { Component, Input, OnInit } from '@angular/core';
import { BooksServce } from '../books.service';


@Component({
  selector: 'app-year-item',
  templateUrl: './year-item.component.html',
  styleUrls: ['./year-item.component.css']
})
export class YearItemComponent implements OnInit {
  @Input() year;
  bookService: BooksServce;

  constructor(bookService: BooksServce) {
    this.bookService = bookService;
  }

  ngOnInit() {
  }

  onChoose(yearChosen) {
    this.bookService.onYearChosen(yearChosen);
  }
}
