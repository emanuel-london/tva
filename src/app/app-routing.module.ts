import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LevelComponent } from './level/level.component';
import { AreaComponent } from './area/area.component';
import { StartComponent } from './start/start.component';
import { TrekContentsComponent } from './trek-contents/trek-contents.component';




const routes: Routes = [
  { path: '', redirectTo: '/level', pathMatch: 'full' },
  { path: 'level' , component: LevelComponent },
  { path: 'choose' , component: AreaComponent },
  { path: 'start' , component: StartComponent },
  { path: 'contents' , component: TrekContentsComponent },

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
