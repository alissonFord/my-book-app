import { Injectable } from '@angular/core';

@Injectable()
export class BooksServce {
  books = [
    { title: 'Kurz i krew', author: 'Rejmer, Malgorzata', year: '2018'},
    { title: 'Solaris', author: 'Lem, Stanislaw', year: '2019' },
    { title: 'Ostre przedmioty', author: 'Flynn, Gillian', year: '2019' },
    { title: 'Żółte światło', author: 'Pilch, Jerzy', year: '2019' },
    { title: 'Jak przetrwać wśród czarnych dziur', author: 'Blomquist, Jeff; Goldberg, Dave', year: '2020'}
  ];

  uniqueYears = [];
  chosenYear;

  getBooks() {
    return this.books.filter((book) => {
      return book.year === this.chosenYear;
    });
  }

  getUniqueYears() {
    const uniqueYears = [...new Set(this.books.map(book => book.year))];
    this.uniqueYears = uniqueYears;
    return this.uniqueYears;
  }

  onYearChosen(chosenYear) {
    return this.uniqueYears.findIndex((year) => {
      if (year === chosenYear) {
        this.chosenYear = chosenYear;
        return true;
      }
    });
  }

  addNewBook(title, author, year) {
    this.books.push({title, author, year});
  }
}
