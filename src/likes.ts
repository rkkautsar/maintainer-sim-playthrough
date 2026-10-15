import type { Post } from './model.ts';
type Step = (p: Post) => Post;
class ReactionPipeline {
  private steps: Step[] = [];
  use(step: Step) { this.steps.push(step); return this; }
  run(p: Post) { return this.steps.reduce((value, step) => step(value), p); }
}
export function like(post: Post, userId: string): Post {
 return new ReactionPipeline().use(p => p.likedBy.includes(userId) ? p : { ...p, likedBy: [...p.likedBy, userId] }).run(post);
}
