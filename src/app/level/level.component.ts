import { Component, OnInit } from '@angular/core';
import { Levels } from '../levels';
import { LEVELS } from '../imported-levels';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  constructor() { }
levels = LEVELS;

goBack(): void {
  this.location.next();
}
  ngOnInit() {
  }

}
