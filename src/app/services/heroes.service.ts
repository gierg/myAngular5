import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroesService {

  constructor(
    public http: Http
  ) {
    console.log('Connected to heroes service...');
  }

  getDummyData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map(res => res.json());
  }

}
