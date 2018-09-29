import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = '';
  password = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.user, this.password).subscribe(result => {
      if (result.success) {
        console.log(result);
        sessionStorage.setItem('app.token', result.auth_token);
        this.router.navigate(['admin']);
      }
    }, error => {
      console.log('error: ', error);
    });
  }

  goToRegister() {
    this.router.navigate(['register']);
  }
}
