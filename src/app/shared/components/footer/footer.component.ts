import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  newsletterEmail = '';
  isSubscribed = false;

  subscribeNewsletter(): void {
    if (this.newsletterEmail) {
      this.isSubscribed = true;
      this.newsletterEmail = '';
      setTimeout(() => this.isSubscribed = false, 4000);
    }
  }
}
