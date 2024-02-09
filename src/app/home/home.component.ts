
import { Component, Input } from '@angular/core';
import { interval, takeUntil } from 'rxjs';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [FooterComponent, HeaderComponent]
})
export class HomeComponent {
  @Input() slides: string[] = [
    '../../assets/pic1.png',
    '../../assets/slider2.jpg',
    '../../assets/slider3.jpg',
    '../../assets/slider4.jpg',
    '../../assets/slidder5.jpg',
    '../../assets/slider6.jpg',
  ];
  currentSlideIndex = 0;

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
  constructor() {}
  ngOnInit(): void {}
}
