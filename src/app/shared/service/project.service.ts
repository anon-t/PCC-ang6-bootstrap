import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProjectSearch } from '../model/project-search';
import { Observable } from 'rxjs';
import { ProjectResult } from '../model/project-result';
import { Project } from '../model/project';
import { ServiceResult } from '../model/service-result';
import { ProjectUpdate } from '../model/project-update';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  dataUrl = `${environment.apiUrl}/api/v1`;

  constructor(
    private http: HttpClient
  ) { }

  searchProj(search: ProjectSearch): Observable<ProjectResult> {
    return this.http.post<ProjectResult>(`${this.dataUrl}/project/search`, search, {
      headers: {
        'Authorization': 'JWT ' + sessionStorage.getItem('app.token'),
        'Content-Type': 'application/json'
      }
    });
  }

  delProj(code: string): Observable<ServiceResult> {
    return this.http.delete<ServiceResult>(`${this.dataUrl}/project/` + code);
  }

  addProj(body: Project): Observable<ServiceResult> {
    return this.http.post<ServiceResult>(`${this.dataUrl}/project/`, body, {
      headers: {
        'Authorization': 'JWT ' + sessionStorage.getItem('app.token'),
        'Content-Type': 'application/json'
      }
    });
  }

  loadProjById(code: string): Observable<ProjectUpdate> {
    return this.http.get<ProjectUpdate>(`${this.dataUrl}/project/findByID/${code}`, {
      headers: {
        'Authorization': 'JWT ' + sessionStorage.getItem('app.token')
      }
    });
  }

  updateProj(body: ProjectUpdate): Observable<ServiceResult> {
    return this.http.put<ServiceResult>(`${this.dataUrl}/project`, body, {
      headers: {
        'Authorization': 'JWT ' + sessionStorage.getItem('app.token'),
        'Content-Type': 'application/json'
      }
    });
  }
}
