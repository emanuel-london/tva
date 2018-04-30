import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
//import { JcfModule } from 'angular2-jcf-directive';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';


import { AppComponent } from './app.component';
import { LevelComponent } from './level/level.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { AreaComponent } from './area/area.component';
import { AppRoutingModule } from './/app-routing.module';
import { StartComponent } from './start/start.component';
import { TrekContentsComponent } from './trek-contents/trek-contents.component';
import { RiverTrekStartComponent } from './river-trek-start/river-trek-start.component';
import { RiverTrekContentsComponent } from './river-trek-contents/river-trek-contents.component';
import { BackpackComponent } from './backpack/backpack.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};


@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    WeatherWidgetComponent,
    AreaComponent,
    StartComponent,
    TrekContentsComponent,
    RiverTrekStartComponent,
    RiverTrekContentsComponent,
    BackpackComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // Custom Modules
   //JcfModule,
   SwiperModule,

  ],
  providers: [
    {
         provide: SWIPER_CONFIG,
         useValue: DEFAULT_SWIPER_CONFIG,
       }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
