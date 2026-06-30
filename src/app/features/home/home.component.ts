import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { FeaturesStripComponent } from './components/features-strip/features-strip.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogPreviewComponent } from './components/blog-preview/blog-preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSliderComponent,
    FeaturesStripComponent,
    AboutSectionComponent,
    BestSellersComponent,
    TestimonialsComponent,
    BlogPreviewComponent
  ],
  template: `
    <main id="home-page">
      <app-hero-slider></app-hero-slider>
      <app-features-strip></app-features-strip>
      <app-about-section></app-about-section>
      <app-best-sellers></app-best-sellers>
      <app-testimonials></app-testimonials>
      <app-blog-preview></app-blog-preview>
    </main>
  `
})
export class HomeComponent {}
