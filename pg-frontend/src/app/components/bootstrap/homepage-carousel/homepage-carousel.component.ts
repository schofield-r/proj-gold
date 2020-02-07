import { Component, ViewChild } from "@angular/core";

import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-homepage-carousel",
  templateUrl: "./homepage-carousel.component.html"
})
export class HomepageCarouselComponent {
  image1 = "assets/carousel-photos/1.jpg";
  image2 = "assets/carousel-photos/2.jpg";
  image3 = "assets/carousel-photos/3.jpg";
  image4 = "assets/carousel-photos/4.jpg";
  image5 = "assets/carousel-photos/5.jpg";
  image6 = "assets/carousel-photos/6.jpg";
  image7 = "assets/carousel-photos/7.jpg";
  image8 = "assets/carousel-photos/8.jpg";
  image9 = "assets/carousel-photos/9.jpg";

  images = [
    this.image1,
    this.image2,
    this.image3,
    this.image4,
    this.image5,
    this.image6,
    this.image7,
    this.image8,
    this.image9
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild("carousel", { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
}
