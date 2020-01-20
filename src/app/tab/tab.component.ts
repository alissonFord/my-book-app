import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  books = [
    { title: 'Kurz i krew', author: 'Rejmer, Malgorzata', year: '2018'},
    { title: 'Solaris', author: 'Lem, Stanislaw', year: '2019' },
    { title: 'Ostre przedmioty', author: 'Flynn, Gillian', year: '2019' },
    { title: 'Żółte światło', author: 'Pilch, Jerzy', year: '2019' },
    { title: 'Jak przetrwać wśród czarnych dziur', author: 'Blomquist, Jeff; Goldberg, Dave', year: '2020'}
  ];

  // @Input() chosenYear;
  chosenYearFromYearsComponent;
  uniqueYears = [];

  constructor() {}

  ngOnInit() {
  }

  onChooseTabComponent(year) {
    this.chosenYearFromYearsComponent = year;
    // console.log(this.chosenYearFromYearsComponent);
    // this.chosenYear = year;
  }

  getBooks() {
    return this.books.filter((book) => {
      return book.year === this.chosenYearFromYearsComponent;
    });
  }

  getUniqueYears() {
    const uniqueYears = [...new Set(this.books.map(book => book.year))];
    this.uniqueYears = uniqueYears;
    return this.uniqueYears;
  }

}
