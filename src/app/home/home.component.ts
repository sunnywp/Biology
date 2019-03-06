import {Component, OnInit} from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.less']
})

export class HomeComponent implements OnInit {
  productList:any[] = [
    {url:'assets/images/4.jpg',
    content:'Acura® manual手动移液器'},
    {url:'assets/images/5.jpg',
      content:'Acura® electro电动移液器'},
    {url:'assets/images/6.jpg',
      content:'Acurex™紧凑型瓶口配液器'},
    {url:'assets/images/7.jpg',
      content:'Calibrex™瓶口分液器'},
    {url:'assets/images/8.jpg',
      content:'Dosys™连续分液注射器'},
    {url:'assets/images/9.jpg',
      content:' Profiller™移液管控制器'},
    {url:'assets/images/10.jpg',
      content:'Acura®self-refill连续分液器'},
    {url:'assets/images/11.jpg',
      content:'Stepper™ 连续注射移液器'},
    {url:'assets/images/12.jpg',
      content:'Qualitix®移液器耗材'},
    {url:'assets/images/13.jpg',
      content:'生物培养消耗品'}
  ];
  constructor() {
  }

  ngOnInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
