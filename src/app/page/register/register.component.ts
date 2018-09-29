import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../shared/service/register.service';
import { Register } from '../../shared/model/register';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: Register = <Register>{};

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegister(registerForm: NgForm) {
    if (registerForm.valid) {
      this.registerService.register(this.register).subscribe(result => {
        if (result.success) {
          this.router.navigate(['login']);
        }
      }, error => {
        console.log(error);
      });
    }
  }

}
