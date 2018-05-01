import { Component, OnInit } from '@angular/core';
import { LevelsService } from '../services/levels.service';
@Component({
  moduleId: module.id,
  selector: 'app-level',
  templateUrl: 'level.component.html',
  styleUrls: ['level.component.css'],
  providers: [LevelsService]
})
export class LevelComponent implements OnInit {
  levels: Levels[];
  constructor(private levelsService: LevelsService) {
    this.levelsService.getLevels().subscribe(levels =>
    {
      this.levels = levels;
    });
  }
  ngOnInit() {
  }
}
interface Levels {
  name: DrupalArray[];
  tid: DrupalArray[];
}
interface DrupalArray {
  value: string;
}
