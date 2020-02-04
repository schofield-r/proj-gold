import { Component, ViewChild } from "@angular/core";
import image1 from "../../../../assets/img/project-images/Project-1-image.jpg";
import image2 from "../../../../assets/img/project-images/Project-2-image.jpg";
import image3 from "../../../../assets/img/project-images/Project-3-image.jpg";
import image4 from "../../../../assets/img/project-images/Project-4-image.jpg";

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
  images = [image1, image2, image3, image4];

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
