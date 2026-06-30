import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Karela Amla Juice',
      slug: 'karela-amla-juice',
      category: 'Juices',
      price: 349,
      originalPrice: 499,
      discount: 30,
      image: 'assets/images/product-karela-amla.png',
      description: 'A powerful combination of bitter gourd (karela) and Indian gooseberry (amla) that helps manage blood sugar levels, boost immunity and improve digestion naturally.',
      shortDescription: 'Natural juice for blood sugar management & immunity boost',
      benefits: ['Manages blood sugar', 'Boosts immunity', 'Improves digestion', 'Rich in Vitamin C'],
      ingredients: ['Karela (Bitter Gourd) Extract', 'Amla (Indian Gooseberry) Extract', 'Purified Water'],
      isBestSeller: true,
      rating: 4.5,
      reviewCount: 128,
      inStock: true
    },
    {
      id: 2,
      name: 'Moringa Capsules',
      slug: 'moringa-capsules',
      category: 'Capsules',
      price: 299,
      originalPrice: 399,
      discount: 25,
      image: 'assets/images/product-moringa.png',
      description: 'Premium quality moringa capsules packed with vitamins, minerals, and antioxidants. Acts as a natural multivitamin to support overall health and wellness.',
      shortDescription: 'Natural multivitamin & multimineral supplement',
      benefits: ['Rich in Vitamins', 'Boosts Energy', 'Supports digestion', 'Natural antioxidant'],
      ingredients: ['Moringa Oleifera Leaf Powder', 'Hydroxypropyl Methylcellulose (Capsule Shell)'],
      isNew: true,
      rating: 4.7,
      reviewCount: 85,
      inStock: true
    },
    {
      id: 3,
      name: 'Ashwagandha Tablets',
      slug: 'ashwagandha-tablets',
      category: 'Tablets',
      price: 249,
      originalPrice: 349,
      discount: 29,
      image: 'assets/images/product-ashwagandha.png',
      description: 'Ancient Ayurvedic herb Ashwagandha known for reducing stress and anxiety, improving concentration, and boosting strength and stamina naturally.',
      shortDescription: 'Stress relief & energy booster Ayurvedic supplement',
      benefits: ['Reduces stress', 'Improves focus', 'Boosts stamina', 'Better sleep'],
      ingredients: ['Ashwagandha Root Extract (Withania somnifera)', 'Microcrystalline Cellulose', 'Magnesium Stearate'],
      isBestSeller: true,
      rating: 4.8,
      reviewCount: 212,
      inStock: true
    },
    {
      id: 4,
      name: 'Natural Honey',
      slug: 'natural-honey',
      category: 'Natural Foods',
      price: 449,
      originalPrice: 549,
      discount: 18,
      image: 'assets/images/product-honey.png',
      description: '100% pure and raw natural honey collected from the finest apiaries. No additives, no preservatives – just the purest form of nature\'s sweetener.',
      shortDescription: '100% pure raw honey with no additives',
      benefits: ['Natural energy source', 'Antibacterial properties', 'Soothes sore throat', 'Rich in antioxidants'],
      ingredients: ['Pure Honey (100%)'],
      isNew: false,
      isBestSeller: true,
      rating: 4.6,
      reviewCount: 167,
      inStock: true
    },
    {
      id: 5,
      name: 'Chia Seeds',
      slug: 'chia-seeds',
      category: 'Seeds & Grains',
      price: 199,
      originalPrice: 279,
      discount: 29,
      image: 'assets/images/product-karela-amla.png',
      description: 'Premium quality chia seeds rich in Omega-3 fatty acids, fiber, protein and essential minerals. Perfect for weight management and heart health.',
      shortDescription: 'Omega-3 rich seeds for weight management',
      benefits: ['High in Omega-3', 'Rich in fiber', 'Good protein source', 'Supports heart health'],
      ingredients: ['Organic Chia Seeds (Salvia hispanica)'],
      isNew: true,
      rating: 4.4,
      reviewCount: 56,
      inStock: true
    },
    {
      id: 6,
      name: 'Herbal Pain Relief Oil',
      slug: 'herbal-pain-relief-oil',
      category: 'Oils & Topicals',
      price: 179,
      originalPrice: 249,
      discount: 28,
      image: 'assets/images/product-moringa.png',
      description: 'Powerful herbal blend for fast and effective relief from joint pain, muscle aches, and arthritis. Made with traditional Ayurvedic herbs and pure oils.',
      shortDescription: 'Fast-acting herbal oil for joint & muscle pain',
      benefits: ['Fast pain relief', 'Anti-inflammatory', 'No side effects', 'Ayurvedic formula'],
      ingredients: ['Mahanarayan Oil', 'Eucalyptus Oil', 'Wintergreen Oil', 'Camphor'],
      isBestSeller: false,
      rating: 4.3,
      reviewCount: 93,
      inStock: true
    }
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getProductBySlug(slug: string): Product | undefined {
    return this.products.find(p => p.slug === slug);
  }

  getBestSellers(): Product[] {
    return this.products.filter(p => p.isBestSeller);
  }

  getNewProducts(): Product[] {
    return this.products.filter(p => p.isNew);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }
}
