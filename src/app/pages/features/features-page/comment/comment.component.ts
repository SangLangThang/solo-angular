import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { COMMENT_DATA } from './comment.data';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  COMMENT_DATA = COMMENT_DATA
  config: SwiperOptions = {
    slidesPerView: 3,
    loop: true,
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  };
  constructor() { }

  ngOnInit(): void {
  }

}
