import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  team = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', initials: 'RK', color: '#3a7d34' },
    { name: 'Dr. Priya Sharma', role: 'Chief Ayurvedic Officer', initials: 'PS', color: '#d4a843' },
    { name: 'Anand Verma', role: 'Quality Control Head', initials: 'AV', color: '#1565c0' },
    { name: 'Sunita Gupta', role: 'Research & Development', initials: 'SG', color: '#e53935' }
  ];

  milestones = [
    { year: '2008', event: 'Company founded in Lucknow, U.P.' },
    { year: '2012', event: 'Received AYUSH Ministry certification' },
    { year: '2016', event: 'Expanded product line to 30+ products' },
    { year: '2019', event: 'ISO 9001:2015 certification achieved' },
    { year: '2022', event: 'Reached 10,000+ happy customers milestone' },
    { year: '2024', event: 'Launched premium Ayurvedic supplement range' }
  ];
}
