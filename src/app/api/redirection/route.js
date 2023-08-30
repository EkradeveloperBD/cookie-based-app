import { NextRequest } from 'next/server';

export default function handler(req) {
  return NextResponse.redirect('/', { status: 302 });
}
