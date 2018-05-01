import { Component, OnInit } from '@angular/core';
import { KnowledgeService } from '../services/knowledge.service';
import { SliderComponent } from '../components/slider/slider.component';
import { UserNavComponent } from '../components/usernav/usernav.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';

@Component({
  moduleId: module.id,
  selector: 'app-river-trek-start',
  templateUrl: 'river-trek-start.component.html',
  styleUrls: ['river-trek-start.component.css'],
  providers: [KnowledgeService]
})
export class RiverTrekStartComponent implements OnInit {
  knows: Levels[];
  constructor(private knowledgeService: KnowledgeService) {
    this.knowledgeService.getKnows().subscribe(knows =>
    {
      this.knows = knows;
      console.log(knows);
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
