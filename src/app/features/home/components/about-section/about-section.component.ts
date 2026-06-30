import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Herbal Products' },
    { value: '10K+', label: 'Happy Customers' },
    { value: '100%', label: 'Natural & Pure' }
  ];
}
