import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LevelComponent } from './level/level.component';
import { AreaComponent } from './area/area.component';
import { StartComponent } from './start/start.component';
import { TrekContentsComponent } from './trek-contents/trek-contents.component';
import { RiverTrekStartComponent } from './river-trek-start/river-trek-start.component';
import { RiverTrekContentsComponent } from './river-trek-contents/river-trek-contents.component';
import { BackpackComponent } from './backpack/backpack.component';
import { MapBoxComponent } from './components/map-box/map-box.component';




const routes: Routes = [
  { path: '', redirectTo: '/level', pathMatch: 'full' },
  { path: 'level' , component: LevelComponent },
  { path: 'choose' , component: AreaComponent },
  { path: 'contents' , component: TrekContentsComponent },
  { path: 'start' , component: StartComponent },
  { path: 'trek-start' , component: RiverTrekStartComponent },
  { path: 'trek-content' , component: RiverTrekContentsComponent  },
  { path: 'backpack' , component: BackpackComponent },
  { path: 'map' , component: MapBoxComponent },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],


exports: [ RouterModule ],

  declarations: []
})
export class AppRoutingModule { }
