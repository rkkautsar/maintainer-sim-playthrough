import type { Post } from './model.ts';
export function edit(post: Post, actor: string, title: string): Post {
  if (actor !== post.ownerId) throw new Error('Forbidden');
  return { ...post, title };
}
