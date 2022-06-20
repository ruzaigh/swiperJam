import {AfterViewInit, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, SwiperOptions, Zoom } from 'swiper';
import { PaginationOptions } from 'swiper/types';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Tab1Page {

  @ViewChild("canvas") spinner: HTMLCanvasElement

  config: SwiperOptions = {
    navigation: true,
    autoplay: {
      delay: 5000
    },
    pagination: { 
      clickable: true,     
      renderBullet: function (index, className) {
        return `<span class="${className}">

        </span>`
   },
   } as PaginationOptions,
  };
//         <canvas class="spinner" #canvas id="spinner-${index}" width="30" height="30"></canvas>
  constructor() {

  }

  indexChanged() {
    let id = `#spinner-${0}`;
    let spinner = <HTMLCanvasElement>document.querySelector(id);
    spinner.style.display = 'none';
    this.spinnerYay(1)
  }


  ionViewDidEnter(): void {
    console.log("ionViewWillEnter")
    
    
     setTimeout(() =>{
      this.spinnerYay()
    }, 1)
  }



  spinnerYay(index: number = 0) {
    let id = `#spinner-${index}`;
    let spinner = <HTMLCanvasElement>document.querySelector(id);
    console.log(this.spinner)
    let ctx = spinner.getContext("2d");
    let width = spinner.width;
    let height = spinner.height;
    console.log({width, height})
    let degrees = 0;
    let new_degrees = 0;
    let difference = 0;
    let color = "#b57bff";
    let bgcolor = "#222";
    let animation_loop, redraw_loop;
    
    function init() {
  
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.strokeStyle = bgcolor;
      ctx.lineWidth = 2;
      ctx.arc(width/2, width/2, 12, 0, Math.PI*2, false);
      ctx.stroke();
      let radians = degrees * Math.PI / 180;
      
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.arc(width/2, height/2, 12, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false); 
      ctx.stroke();
      ctx.fillStyle = color;
    }
    
    function draw() {
      if (typeof animation_loop != undefined) clearInterval(animation_loop);
      new_degrees = 360;
      difference = new_degrees - degrees;
      animation_loop = setInterval(animate_to, 5000/difference);
    }
    
    function animate_to() {
      if(degrees == new_degrees) 
        clearInterval(animation_loop);
      else if(degrees < new_degrees)
        degrees++;
      else
        degrees--;
      init();
    }
    
    draw();
  }


}
