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
  ];
  constructor(
  ) {}

}
