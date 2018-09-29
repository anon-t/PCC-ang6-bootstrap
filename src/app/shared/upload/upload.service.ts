import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  makeFileRequest(url: string, fileList: Array<File>): Observable<any> {
    if (fileList.length > 0) {
      const formData: FormData = new FormData();
      for (let i = 0; i < fileList.length; i++) {
        formData.append('attach', fileList[i], fileList[i].name);
      }

      return this.http.post(url, formData, {
        headers: {
          Accept: 'application/json'
        }
      }).pipe(
        map(result => {

        })
      );
    }
  }



}
