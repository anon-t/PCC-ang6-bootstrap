import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  @Input()
  step: number;

  stepClass: Array<string> = [];

  constructor(private router: Router) {}

  ngOnInit() {
    for (let i = 0; i < 3; i++) {
      if (this.step > i) {
        this.stepClass.push('btn-primary');
      } else {
        this.stepClass.push('btn-light');
      }
    }
  }

  onStepClick(page) {
    this.router.navigate([page]);
  }
}
