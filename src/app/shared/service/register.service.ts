import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Register } from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(register: Register): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/v1/user/register`, register);
  }
}
