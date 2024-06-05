import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IData } from '../types/data';
import { Endpoint } from '../constant/Endpoint';
import { IFile } from '../types/file';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  constructor(private http: HttpClient) {}

  fetchData(): Observable<IFile[]> {
    return this.http.get<IData[]>(Endpoint.photos).pipe(
      map((response) => {
        return response.map((el) => {
          return {
            image: el.url,
            name: el.title,
            type: 'MP4',
            size: '11.2 MB',
            description: 'Harry Smith',
          };
        });
      })
    );
  }
}
