import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LevelsService {

  delayMs = 500;
  
  constructor(private http: Http) {

  }

  getLevels() {
    return this.http.get('http://dev-tennessee-river-valley.pantheonsite.io/tva-services/level-menu?_format=json')
    .map(res => res.json());
  }

  // Fake server update; assume nothing can go wrong
  updateHero(levels: Levels): Observable<Level>  {
    const oldlevel = levels.find(l => l.id === levels.id);
    const newLevels = Object.assign(oldLevels, level); // Demo: mutate cached hero
    return of(newLevel).pipe(delay(this.delayMs)); // simulate latency with delay
  }
}
