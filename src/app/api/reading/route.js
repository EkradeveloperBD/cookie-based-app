import { parse } from 'cookie';
import { NextRequest } from 'next/server';

export default function handler(req) {
  const cookies = parse(req.headers.cookie || '');

  const userPreference = cookies.theme || 'No preference set';

  return new Response(`User Preference: ${userPreference}`);
}
