import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryBtn: { label: string; link: string };
  secondaryBtn: { label: string; link: string };
  badge: string;
}

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.scss'
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  slides: Slide[] = [
    {
      id: 1,
      title: 'Botanical Luxury',
      subtitle: 'Pure Elements',
      description: 'Experience the harmony of rare botanicals and essential oils. Sustainably sourced for your ultimate well-being.',
      image: 'assets/images/hero_botanical_1_1782835175572.png',
      badge: 'Artisan Crafted',
      primaryBtn: { label: 'Shop Now', link: '/products' },
      secondaryBtn: { label: 'Our Story', link: '/about' }
    },
    {
      id: 2,
      title: 'Earthy & Grounding',
      subtitle: 'Holistic Living',
      description: 'Nourish your body and soul with our curated collection of organic lifestyle remedies and wellness tonics.',
      image: 'assets/images/hero_botanical_2_1782835198714.png',
      badge: 'Holistic Wellness',
      primaryBtn: { label: 'Explore Products', link: '/products' },
      secondaryBtn: { label: 'Read Blog', link: '/blog' }
    },
    {
      id: 3,
      title: 'Golden Elixirs',
      subtitle: 'Nature\'s Remedy',
      description: 'Unleash the healing potential of premium turmeric, ashwagandha, and moringa blends.',
      image: 'assets/images/hero_botanical_1_1782835175572.png',
      badge: 'Premium Grade',
      primaryBtn: { label: 'View Best Sellers', link: '/products' },
      secondaryBtn: { label: 'Contact Us', link: '/contact' }
    }
  ];

  currentSlide = signal(0);
  isAnimating = signal(false);
  private autoPlayInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000);
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  goToSlide(index: number): void {
    if (this.isAnimating() || index === this.currentSlide()) return;
    this.isAnimating.set(true);
    this.currentSlide.set(index);
    setTimeout(() => this.isAnimating.set(false), 700);
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  prevSlide(): void {
    const prev = (this.currentSlide() - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(prev);
  }

  nextSlide(): void {
    const next = (this.currentSlide() + 1) % this.slides.length;
    this.goToSlide(next);
  }
}
