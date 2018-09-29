import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()
  title = 'Hello';

  @Output()
  btnClick: EventEmitter<string> = new EventEmitter();

  url = 'http://www.google.co.th';

  isActive: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onBtnClick() {
    this.isActive = !this.isActive;
    this.btnClick.emit(this.title);
  }

}
