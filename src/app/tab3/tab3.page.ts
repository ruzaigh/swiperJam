import {Component, Renderer2,} from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination } from 'swiper';
import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
      imageUrl: '../../assets/images/post6.jpeg'
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
      imageUrl: '../../assets/images/post10.webp'
    },
    {
      _id: 10,
      imageUrl: '../../assets/images/post11.png'
    },
    {
      _id: 11,
      imageUrl: '../../assets/images/post12.jpeg'
    },
  ];

  filterName: string = 'COMMENTS';
  constructor(
  ) {}
  fliterSelected(name:  string){
    if(name === 'COMMENTS') return this.filterName = name;
    if(name === 'EDITIONS') return this.filterName = name;
    if(name === 'METADATA') return this.filterName = name;
  }
}
