import { Component, OnInit } from '@angular/core';
import {AreaList} from '../area-list';
import{AREAS} from '../areas'

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

area = AREAS;

selectedArea: AreaList;

onSelect(area: AreaList): void {
  this.selectedAreaList = areaList;
}
test = "hello world"

  constructor() { }

  ngOnInit() {
  }

}
