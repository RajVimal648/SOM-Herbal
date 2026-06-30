import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features-strip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="features-strip">
      <div class="container">
        <div class="features-strip__grid">
          @for (feature of features; track feature.id) {
            <div class="feature-item" [id]="'feature-' + feature.id">
              <div class="feature-item__icon">
                <i class="fas {{ feature.icon }}"></i>
              </div>
              <div class="feature-item__content">
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.subtitle }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .features-strip {
      background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
      padding: 32px 0;

      &__grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;

        @media (max-width: 768px) { grid-template-columns: repeat(2, 1fr); }
        @media (max-width: 400px) { grid-template-columns: 1fr; }
      }
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
      border-right: 1px solid rgba(255,255,255,0.15);
      transition: transform var(--transition-fast);

      &:last-child { border-right: none; }

      &:hover { transform: translateY(-2px); }

      @media (max-width: 768px) { border-right: none; }

      &__icon {
        width: 52px;
        height: 52px;
        background: rgba(255,255,255,0.15);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-accent);
        font-size: 22px;
        flex-shrink: 0;
        transition: background var(--transition-fast);
      }

      &:hover &__icon {
        background: rgba(255,255,255,0.25);
      }

      &__content {
        h3 {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 3px;
        }
        p {
          font-size: 12px;
          color: rgba(255,255,255,0.7);
        }
      }
    }
  `]
})
export class FeaturesStripComponent {
  features = [
    { id: 1, icon: 'fa-truck', title: 'Free Shipping', subtitle: 'On orders above ₹499' },
    { id: 2, icon: 'fa-seedling', title: 'Natural Ingredients', subtitle: '100% herbal & pure' },
    { id: 3, icon: 'fa-shield-alt', title: 'Quality Assured', subtitle: 'Lab tested & certified' },
    { id: 4, icon: 'fa-undo-alt', title: 'Easy Returns', subtitle: '7-day return policy' }
  ];
}
