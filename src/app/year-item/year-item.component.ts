import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-year-item',
  templateUrl: './year-item.component.html',
  styleUrls: ['./year-item.component.css']
})
export class YearItemComponent implements OnInit {
  @Input() year;
  @Output() chosenYearToDisplay = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onChoose(yearChosen) {
    this.chosenYearToDisplay.emit(yearChosen);
    console.log(yearChosen);
  }
}
