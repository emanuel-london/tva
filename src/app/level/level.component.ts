import { Component, OnInit } from '@angular/core';
import { LevelsService } from '../services/levels.service';
import { SliderComponent } from '../components/slider/slider.component';
import { UserNavComponent } from '../components/usernav/usernav.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'app-level',
  templateUrl: 'level.component.html',
  styleUrls: ['level.component.css'],
  providers: [LevelsService],
})
export class LevelComponent implements OnInit {
  ngOnInit() {this.getLevels()}

 levels: Observable<Levels[]>;
 isLoading = false;
 selectedLevels: Level;


  constructor(private levelsService: LevelsService) {}
    getLevels(){
      this.levels = this.levelsService.getLevels()
                        // TODO: error handling
                        .pipe(finalize(() => this.isLoading = false));
      this.selectedlevel = undefined;

    }
    select(levels: Levels) { this.selectedLevels = levels; }
  }
  interface Levels {
    name: DrupalArray[];
    tid: DrupalArray[];
  }
  interface DrupalArray {
    value: string;
  }

