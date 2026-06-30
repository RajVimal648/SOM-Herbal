import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../core/services/blog.service';
import { BlogPost } from '../../../core/models/blog.model';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent implements OnInit {
  blogService = inject(BlogService);
  route = inject(ActivatedRoute);
  post = signal<BlogPost | undefined>(undefined);
  recentPosts = this.blogService.getRecentPosts(3);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('id') ?? '';
    this.post.set(this.blogService.getPostBySlug(slug));
  }
}
