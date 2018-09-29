import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-zone',
  templateUrl: './private-zone.component.html',
  styleUrls: ['./private-zone.component.css']
})
export class PrivateZoneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSingOut() {
    sessionStorage.removeItem('app.token');
    this.router.navigate(['login']);
  }

  clickPage(page: string) {
    this.router.navigate([page]);
  }

}
