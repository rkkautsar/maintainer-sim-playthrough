import type { Post } from './model.ts';
export function like(post: Post, userId: string): Post {
  if (post.likedBy.includes(userId)) return post;
  return { ...post, likedBy: [...post.likedBy, userId] };
}
