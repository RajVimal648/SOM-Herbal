import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private _cartItems = signal<CartItem[]>([]);

  cartItems = this._cartItems.asReadonly();

  cartCount = computed(() =>
    this._cartItems().reduce((sum, item) => sum + item.quantity, 0)
  );

  cartTotal = computed(() =>
    this._cartItems().reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  );

  addToCart(product: Product, quantity = 1): void {
    const items = this._cartItems();
    const existingIndex = items.findIndex(i => i.product.id === product.id);
    if (existingIndex >= 0) {
      const updated = [...items];
      updated[existingIndex] = { ...updated[existingIndex], quantity: updated[existingIndex].quantity + quantity };
      this._cartItems.set(updated);
    } else {
      this._cartItems.set([...items, { product, quantity }]);
    }
  }

  removeFromCart(productId: number): void {
    this._cartItems.update(items => items.filter(i => i.product.id !== productId));
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    this._cartItems.update(items =>
      items.map(i => i.product.id === productId ? { ...i, quantity } : i)
    );
  }

  clearCart(): void {
    this._cartItems.set([]);
  }
}
