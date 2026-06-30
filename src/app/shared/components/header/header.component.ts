import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartService = inject(CartService);
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  isSearchOpen = signal(false);

  navLinks = [
    { label: 'Home', path: '/', icon: 'fa-home' },
    { label: 'Company Profile', path: '/about', icon: 'fa-building' },
    { label: 'Our Products', path: '/products', icon: 'fa-leaf' },
    { label: 'Blog', path: '/blog', icon: 'fa-pen' },
    { label: 'Contact Us', path: '/contact', icon: 'fa-phone' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  toggleSearch(): void {
    this.isSearchOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
