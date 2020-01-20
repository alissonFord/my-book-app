import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  years = [2018, 2019, 2020];
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submitted');
  }

}
