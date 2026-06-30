import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../core/services/product.service';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  productService = inject(ProductService);
  allProducts = this.productService.getAllProducts();
  filteredProducts = signal<Product[]>(this.allProducts);
  selectedCategory = signal<string>('All');
  sortBy = signal<string>('default');

  categories = ['All', ...new Set(this.allProducts.map(p => p.category))];

  filterByCategory(category: string): void {
    this.selectedCategory.set(category);
    this.applyFilters();
  }

  onSortChange(sortValue: string): void {
    this.sortBy.set(sortValue);
    this.applyFilters();
  }

  private applyFilters(): void {
    let products = this.selectedCategory() === 'All'
      ? [...this.allProducts]
      : this.allProducts.filter(p => p.category === this.selectedCategory());

    switch (this.sortBy()) {
      case 'price-asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        products.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    this.filteredProducts.set(products);
  }
}
