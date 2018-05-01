import { Component, OnInit } from '@angular/core';
import { AreasService } from '../services/areas.service';

@Component({
  moduleId: module.id,
  selector: 'app-area',
  templateUrl: 'area.component.html',
  styleUrls: ['area.component.css'],
  providers: [AreasService]
})
export class AreaComponent implements OnInit {
  areas: AreasC;

  constructor(private areasService: AreasService) {
    this.areasService.getAreas().subscribe(areas => {
      this.areas = areas;
    });
  }

  ngOnInit() {
  }

}
interface AreasC {
  name: DrupalArray[];
  tid: DrupalArray[];
}
interface DrupalArray {
  value: string;
}
