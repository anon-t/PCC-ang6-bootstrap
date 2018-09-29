import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  dataUrl = `${environment.apiUrl}`;

  constructor(
    private http: HttpClient
  ) { }

  login(user: string, password: string): Observable<any> {
    const data = {
      userCode: user,
      userPwd: password
    };
    return this.http.post(this.dataUrl + '/api/v1/login/doLogin', data);
  }
}
