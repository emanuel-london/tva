import { Component, OnInit } from '@angular/core';
import { AreasService } from '../services/areas.service';
import { SliderComponent } from '../components/slider/slider.component';
import { UserNavComponent } from '../components/usernav/usernav.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';


@Component({
  moduleId: module.id,
  selector: 'app-area',
  templateUrl: 'area.component.html',
  styleUrls: ['area.component.css'],
  providers: [AreasService]
})

export class AreaComponent implements OnInit {
  areas: Areas;

  constructor(private areasService: AreasService) {
    this.areasService.getAreas().subscribe(areas => {
      this.areas = areas;
    });
  }

  ngOnInit() {
  }

}

interface Areas {
  name: DrupalArray[];
  tid: DrupalArray[];
}
interface DrupalArray {
  value: string;
}
