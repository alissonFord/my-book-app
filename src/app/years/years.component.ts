import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {
  @Input() years;
  @Output() chosenYearFromYearItem = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onChooseYearsComponent(year) {
    console.log(year);
    this.chosenYearFromYearItem.emit(year);
  }
}
