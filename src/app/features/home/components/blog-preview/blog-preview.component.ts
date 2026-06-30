import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../../../core/services/blog.service';

@Component({
  selector: 'app-blog-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-preview.component.html',
  styleUrl: './blog-preview.component.scss'
})
export class BlogPreviewComponent {
  blogService = inject(BlogService);
  posts = this.blogService.getRecentPosts(3);
}
