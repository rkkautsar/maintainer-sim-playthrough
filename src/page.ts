export function page<T>(items: T[], offset: number, limit: number): T[] {
  if (!Number.isInteger(offset) || offset < 0 || !Number.isInteger(limit) || limit < 1 || limit > 50) throw new Error('Invalid pagination');
  return items.slice(offset, offset + limit);
}
