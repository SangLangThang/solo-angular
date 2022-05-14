import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { REVIEW_DATA } from './review.data';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  reviews = REVIEW_DATA;
  config: SwiperOptions = {
    slidesPerView: 3,
    loop: true,
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
