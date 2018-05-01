import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AreasService {
  constructor(private http: Http) {
  }

  getAreas() {
    return this.http.get('http://tva.local/tva-services/tva-area?_format=json')
    .map(res => res.json());
  }
}
