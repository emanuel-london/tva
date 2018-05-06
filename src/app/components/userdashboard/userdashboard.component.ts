
import { Component, ViewChild, OnInit } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';


@Component({
  selector: 'user-dashboard',
  templateUrl: './userdashboard.component.html',
})
export class UserDashboard implements OnInit {

  OnInit() {}

  public show: boolean = true;
  public type: string = 'component';

    public disabled: boolean = false;

    public config: SwiperConfigInterface = {
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
      },
    };



}
