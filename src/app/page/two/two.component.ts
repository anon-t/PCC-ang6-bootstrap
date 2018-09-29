import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBtnClick() {
    this.router.navigate(['three']);
  }

}
