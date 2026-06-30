import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
  color: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Manish Gupta',
      role: 'Happy Customer',
      quote: 'I have been using Som Herbal for many years, due to which new energy has been infused into the body. The product range is very good and the quality is excellent. What I really like is the shipping on time. Thank you for your great products.',
      rating: 5,
      initials: 'MG',
      color: '#3a7d34'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Loyal Customer',
      quote: 'The Karela Amla Juice has been a game-changer for my blood sugar management. I have been using it for 6 months and the results are remarkable. Completely natural, no side effects. Highly recommend to everyone!',
      rating: 5,
      initials: 'PS',
      color: '#d4a843'
    },
    {
      id: 3,
      name: 'Rahul Verma',
      role: 'Health Enthusiast',
      quote: 'Ashwagandha tablets from SOM Herbal have helped me manage stress and improve my sleep quality. I feel more energetic throughout the day. The quality is unmatched and the price is very reasonable.',
      rating: 5,
      initials: 'RV',
      color: '#1565c0'
    }
  ];

  currentIndex = signal(0);

  prevTestimonial(): void {
    this.currentIndex.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  nextTestimonial(): void {
    this.currentIndex.update(i => (i + 1) % this.testimonials.length);
  }

  getRange(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}
