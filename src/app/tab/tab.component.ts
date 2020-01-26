import { Component, OnInit, Input } from '@angular/core';
import { BooksServce } from '../books.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  books = [];

  chosenYearFromYearsComponent;
  uniqueYears = [];
  bookService: BooksServce;

  constructor(bookService: BooksServce) {
    this.bookService = bookService;
  }

  ngOnInit() {
  }

  getBooks() {
    this.books = this.bookService.getBooks();
    return this.books;
  }

  getUniqueYears() {
    this.uniqueYears = this.bookService.getUniqueYears();
    return this.uniqueYears;
  }
}
