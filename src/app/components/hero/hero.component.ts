import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('hamburger') hamburger!: ElementRef;
  @ViewChild('navLinks') navLinks!: ElementRef;

  ngAfterViewInit() {
    // Add event listener to hamburger icon after the view initializes
    this.hamburger.nativeElement.addEventListener('click', () => {
      this.navLinks.nativeElement.classList.toggle('active');
    });
  }
}
