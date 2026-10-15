import type { Post } from './model.ts';
export function edit(post: Post, actor: string, title: string): Post {
 return { ...post, title };
}
