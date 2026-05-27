export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ac-services-dubai.example';
export const SITE_NAME = 'AC Services Dubai';
export const SITE_TAGLINE = 'The trusted directory for AC repair, installation and maintenance in Dubai.';

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export function formatRating(r: number) {
  return r.toFixed(1);
}

export function pluralize(n: number, word: string) {
  return `${n.toLocaleString()} ${word}${n === 1 ? '' : 's'}`;
}
