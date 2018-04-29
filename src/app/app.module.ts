import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { LevelComponent } from './level/level.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { AreaComponent } from './area/area.component';
import { AppRoutingModule } from './/app-routing.module';
import { StartComponent } from './start/start.component';
import { TrekContentsComponent } from './trek-contents/trek-contents.component';




@NgModule({
  declarations: [
    AppComponent,
    LevelComponent
    WeatherWidgetComponent,
    AreaComponent,
    StartComponent,
    TrekContentsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
