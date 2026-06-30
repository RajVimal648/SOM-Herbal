import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  productService = inject(ProductService);
  cartService = inject(CartService);
  route = inject(ActivatedRoute);

  product = signal<Product | undefined>(undefined);
  quantity = signal(1);
  addedToCart = signal(false);
  activeTab = signal('benefits');

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('id') ?? '';
    this.product.set(this.productService.getProductBySlug(slug));
  }

  increment(): void { this.quantity.update(q => q + 1); }
  decrement(): void { if (this.quantity() > 1) this.quantity.update(q => q - 1); }

  addToCart(): void {
    const p = this.product();
    if (p) {
      this.cartService.addToCart(p, this.quantity());
      this.addedToCart.set(true);
      setTimeout(() => this.addedToCart.set(false), 2000);
    }
  }

  getStars(rating: number): string[] {
    const stars: string[] = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    for (let i = 0; i < 5; i++) {
      if (i < full) stars.push('full');
      else if (i === full && half) stars.push('half');
      else stars.push('empty');
    }
    return stars;
  }
}
