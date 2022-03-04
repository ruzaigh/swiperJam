import {Component, ViewEncapsulation} from '@angular/core';
import SwiperCore, { EffectCreative } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCreative]);

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Tab2Page {
  sliderName = 'SLIDER1';

  constructor() {
  }
  selectSilder(slideSelect) {
    if(slideSelect === 'SLIDER1')  {this.sliderName = slideSelect;}
    if(slideSelect === 'SLIDER2')  {this.sliderName = slideSelect;}
    if(slideSelect === 'SLIDER3')  {this.sliderName = slideSelect;}
    if(slideSelect === 'SLIDER4')  {this.sliderName = slideSelect;}
    if(slideSelect === 'SLIDER5')  {this.sliderName = slideSelect;}
    if(slideSelect === 'SLIDER6')  {this.sliderName = slideSelect;}
    console.log('SLIDE NAME', this.sliderName);
  }


}
