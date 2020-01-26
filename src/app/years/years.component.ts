import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BooksServce } from '../books.service';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {
  @Input() years;
  bookService: BooksServce;

  constructor(bookService: BooksServce) {
    this.bookService = bookService;
  }

  ngOnInit() {
  }

}
