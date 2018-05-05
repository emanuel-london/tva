import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here\
import { HttpModule } from '@angular/http';
import { JcfModule } from 'angular2-jcf-directive';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';
import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  slidesPerView: 4,
  spaceBetween: 10,
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is <= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
};




import { AppComponent } from './app.component';
import { LevelComponent } from './level/level.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { AreaComponent } from './area/area.component';
import { StartComponent } from './start/start.component';
import { TrekContentsComponent } from './trek-contents/trek-contents.component';
import { RiverTrekStartComponent } from './river-trek-start/river-trek-start.component';
import { RiverTrekContentsComponent } from './river-trek-contents/river-trek-contents.component';
import { BackpackComponent } from './backpack/backpack.component';
import { SliderComponent } from './components/slider/slider.component';
import { UserNavComponent } from './components/usernav/usernav.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SelectBandComponent } from './components/select-band/select-band.component';
import { UserDashboard } from './components/userdashboard/userdashboard.component';
import { MapBoxComponent } from './components/map-box/map-box.component';
//import { NavigatorComponent} from './components/navigator/navigator.component';
//import { MarkerComponent} from './components/marker/marker.component';
//import {MapService} from './services/map.service';
//import {GeocodingService} from './services/geocoding.service';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

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
    SliderComponent,
    UserNavComponent,
    WelcomeComponent,
    SelectBandComponent,
    UserDashboard,
    MapBoxComponent,
    //NavigatorComponent,
    //MarkerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // Custom Modules
    JcfModule,
   SwiperModule,
   HttpModule,
  SwiperModule,
  NgxMapboxGLModule.forRoot({
      accessToken: 'pk.eyJ1IjoiY29udGVudHNjaWVuY2UiLCJhIjoiY2o2ejVndm9yMjdyZzMzczYwdGh2ZHYyZSJ9.KTnjS1mgEkRatw5noEpYvw', // Can also be set per map (accessToken input of mgl-map)
      geocoderAccessToken: 'TOKEN' // Optionnal, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    })
],
  providers: [
  //  MapService,
   //GeocodingService,
   {
     provide: SWIPER_CONFIG,
     useValue: DEFAULT_SWIPER_CONFIG
   }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
