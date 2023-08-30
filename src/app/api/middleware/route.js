import { NextRequest, NextResponse } from 'next/server';

export function middleware(req) {
  
  const token = req.headers.get('Authorization').split(' ')[1]; 

  const newAuthorizationHeader = `Bearer ${token}`;

  const modifiedHeaders = new Headers(req.headers);
  modifiedHeaders.set('Authorization', newAuthorizationHeader);

  // Create a modified request with the new headers
  const modifiedReq = new NextRequest(req.method, req.url, {
    headers: modifiedHeaders
  });

  return NextResponse.next(modifiedReq);
}
