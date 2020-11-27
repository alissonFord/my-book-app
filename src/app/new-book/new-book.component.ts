import { Component, OnInit } from '@angular/core';
import { BooksServce } from '../books.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  bookService: BooksServce;
  alert = false;

  constructor(bookService: BooksServce) {
    this.bookService = bookService;
   }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    this.bookService.addNewBook(submittedForm.value.title,
                                submittedForm.value.author,
                                submittedForm.value.year);

    this.alert = true;
  }

  closeAlert() {
    this.alert = false;
  }

}
