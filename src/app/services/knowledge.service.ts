import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class KnowledgeService {
  constructor(private http: Http) {
  }

  getKnows() {
    return this.http.get('http://tva.local/tva-services/knowledge-area?_format=json')
    .map(res => res.json());
  }
}
