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
  private listDummyImages = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
  ];
  constructor(private http: HttpClient) {}

  fetchData(): Observable<IFile[]> {
    return this.http.get<IData[]>(Endpoint.photos + '?_start=0&_limit=20').pipe(
      map((response) => {
        return response.map((el) => {
          return {
            image: this.getRandomImage(),
            name: el.title,
            type: 'MP4',
            size: '11.2 MB',
            description: 'Harry Smith',
            process: Math.floor(Math.random() * 81),
            isStar: Math.random() >= 0.5,
          };
        });
      })
    );
  }

  private getRandomImage() {
    const randomIndex = Math.floor(Math.random() * this.listDummyImages.length);
    const randomImage = this.listDummyImages[randomIndex];
    return `assets/dummy-images/${randomImage}`;
  }
}
