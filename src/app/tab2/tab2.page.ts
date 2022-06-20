import {Component, ViewEncapsulation} from '@angular/core';
import SwiperCore, { EffectCreative,EffectCards,Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCreative]);
SwiperCore.use([EffectCards]);
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Tab2Page {
  sliderName = 'SLIDER1';
  filterName: string = 'COMMENTS';
  postObject = [
    {
      _id: 0,
      imageUrl: '../../assets/images/post1.jpeg'
    },
    {
      _id: 1,
      imageUrl: '../../assets/images/post2.webp'
    },
    {
      _id: 2,
      imageUrl: '../../assets/images/post3.png'
    },
    {
      _id: 3,
      imageUrl: '../../assets/images/post4.jpeg'
    },
    {
      _id: 4,
      imageUrl: '../../assets/images/post5.jpeg'
    },
    {
      _id: 5,
      imageUrl: '../../assets/images/post6.png'
    },
    {
      _id: 6,
      imageUrl: '../../assets/images/post7.jpeg'
    },
    {
      _id: 7,
      imageUrl: '../../assets/images/post8.jpeg'
    },
    {
      _id: 8,
      imageUrl: '../../assets/images/post9.jpeg'
    },
    {
      _id: 9,
      imageUrl: '../../assets/images/post10.png'
    },
    {
      _id: 10,
      imageUrl: '../../assets/images/post11.jpeg'
    },
    {
      _id: 11,
      imageUrl: '../../assets/images/post12.png'
    },
  ];
  optionOpen: boolean;
  constructor() {
  }
  selectSilder(slideSelect) {
    if(slideSelect === 'SLIDER1')  {this.sliderName = slideSelect;}
    if(slideSelect === 'SLIDER2')  {this.sliderName = slideSelect;}
    if(slideSelect === 'SLIDER3')  {this.sliderName = slideSelect;}
    if(slideSelect === 'SLIDER4')  {this.sliderName = slideSelect;}
    if(slideSelect === 'SLIDER5')  {this.sliderName = slideSelect;}
    if(slideSelect === 'SLIDER6')  {this.sliderName = slideSelect;}
    if(slideSelect === 'SLIDER7')  {this.sliderName = slideSelect;}
    if(slideSelect === 'SLIDER8')  {this.sliderName = slideSelect;}
    this.optionOpen = false;
  }
  pagination ={
    clickable: true,
    renderBullet : function(index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  }
  fliterSelected(name:  string){
    if(name === 'COMMENTS') return this.filterName = name;
    if(name === 'EDITIONS') return this.filterName = name;
    if(name === 'METADATA') return this.filterName = name;
  }
  openUpOption(){
     this.optionOpen = true;
  }
  closeOption(){
    this.optionOpen = false;
  }
}
