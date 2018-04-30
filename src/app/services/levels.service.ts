import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LevelsService {
  constructor(private http: Http) {
    console.log("LevelsService initiated...");
  }

  getLevels() {
    return this.http.get('http://tva.local/tva-services/level-menu?_format=json')
    .map(res => res.json());
  }
}
