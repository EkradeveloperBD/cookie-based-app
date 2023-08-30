
import { NextRequest, NextResponse } from 'next/server';
import { middleware } from './middleware'; // Import the middleware

export default function handler(req) {
  // Use the middleware to modify the request
  const modifiedReq = middleware(req);

  // Use NextResponse.next() to produce the response using the modified request
  return NextResponse.next(`Modified Authorization Header: ${modifiedReq.headers.get('Authorization')}`);
}
