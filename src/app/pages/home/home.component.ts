import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  Directive,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  navBarHide: boolean = true;
  constructor(public el: ElementRef) {}

  ngOnInit(): void {}
  reached = false;
  passed = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 400) {
      this.navBarHide = false;
    } else {
      this.navBarHide = true;
    }
  }
}
