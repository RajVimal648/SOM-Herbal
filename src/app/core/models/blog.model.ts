export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: Date;
  category: string;
  tags: string[];
  readTime: number;
  commentCount: number;
}
