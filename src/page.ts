export function page<T>(items: T[], offset: number, limit: number): T[] {
  if (offset < 0 || limit < 1 || limit > 50) throw new Error('Invalid pagination');
  return items.slice(offset, offset + limit);
}
