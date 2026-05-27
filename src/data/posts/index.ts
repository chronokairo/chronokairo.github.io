import { posts27052026 } from "./posts-27052026";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  source?: string;
};

export const posts: Post[] = [
  ...posts27052026,
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
