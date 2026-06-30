import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog.model';

@Injectable({ providedIn: 'root' })
export class BlogService {

  private blogPosts: BlogPost[] = [
    {
      id: 1,
      slug: 'moringa-herbal-infusion-tea-health-benefits',
      title: 'Moringa (Herbal infusion) Tea – Health Benefits',
      excerpt: 'Moringa oleifera tree is also called the "miracle tree" in some countries, and "drumstick tree" in others. Genus Moringa have...',
      content: `Moringa oleifera is also known as the drumstick tree, the miracle tree, the ben oil tree, or the horseradish tree.
      Moringa has been used for centuries due to its medicinal properties and health benefits. It also has antifungal, antiviral, antidepressant, and anti-inflammatory properties.
      
      The leaves have 7 times more vitamin C than oranges, 4 times more calcium than milk, 4 times more vitamin A than carrots, 3 times more potassium than bananas, and 2 times more protein than yogurt.
      
      Moringa tea is made from the leaves of Moringa oleifera tree. It can be consumed as a hot or cold tea, and comes in loose-leaf or tea bag varieties.`,
      image: 'assets/images/blog-moringa.png',
      author: 'Dr. Priya Sharma',
      date: new Date('2018-03-07'),
      category: 'Health Tips',
      tags: ['moringa', 'herbal tea', 'health benefits', 'nutrition'],
      readTime: 5,
      commentCount: 0
    },
    {
      id: 2,
      slug: 'turmeric-herbal-infusion',
      title: 'Turmeric Herbal Infusion',
      excerpt: 'Turmeric (Curcuma longa) commonly known as Haldi, is known to Ayurveda since Vedic period. Due to its nutraceutical and therapeutical value...',
      content: `Turmeric is a spice that comes from the turmeric plant. It is commonly used in Asian food. You probably know turmeric as the main spice in curry. It has a warm, bitter taste and is frequently used to flavor or color curry powders, mustards, butters, and cheeses.
      
      But the root of turmeric is also used widely to make medicine. It contains a yellow-colored chemical called curcumin, which is often used to color foods and cosmetics.
      
      Turmeric is used for arthritis, heartburn (dyspepsia), joint pain, stomach pain, Crohn's disease and ulcerative colitis, bypass surgery, hemorrhage, diarrhea, intestinal gas, stomach bloating, loss of appetite, jaundice, liver problems, Helicobacter pylori (H. pylori) infection, stomach ulcers, irritable bowel syndrome (IBS), gallbladder disorders, high cholesterol, a skin condition called lichen planus, skin inflammation from radiation treatment, and fatigue.`,
      image: 'assets/images/blog-turmeric.png',
      author: 'Ayurveda Expert',
      date: new Date('2019-09-09'),
      category: 'Ayurveda',
      tags: ['turmeric', 'curcumin', 'anti-inflammatory', 'ayurveda'],
      readTime: 6,
      commentCount: 0
    },
    {
      id: 3,
      slug: 'drumstick-leaves-affect-coronavirus',
      title: 'Drumstick leaves affect the coronavirus.',
      excerpt: 'Moringa oleifera is known as the drumstick tree. It is a tropical plant that is widely distributed across India and...',
      content: `Moringa oleifera is known as the drumstick tree. It is a tropical plant that is widely distributed across India and many other tropical and subtropical regions. It has been used for centuries due to its medicinal properties.
      
      Recent studies have investigated the potential antiviral properties of moringa leaves. The plant contains various bioactive compounds, including flavonoids, phenols, and glucosinolates, which have shown antiviral activity in laboratory settings.
      
      While research is still ongoing and we should not make definitive medical claims, moringa's immune-boosting properties may support the body's natural defense mechanisms. It is rich in Vitamin C, Vitamin A, and other nutrients that are essential for maintaining a healthy immune system.`,
      image: 'assets/images/blog-moringa.png',
      author: 'Research Team',
      date: new Date('2022-07-06'),
      category: 'Research',
      tags: ['moringa', 'immunity', 'antiviral', 'health'],
      readTime: 4,
      commentCount: 0
    }
  ];

  getAllPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getPostById(id: number): BlogPost | undefined {
    return this.blogPosts.find(p => p.id === id);
  }

  getPostBySlug(slug: string): BlogPost | undefined {
    return this.blogPosts.find(p => p.slug === slug);
  }

  getRecentPosts(count = 3): BlogPost[] {
    return this.blogPosts
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, count);
  }
}
