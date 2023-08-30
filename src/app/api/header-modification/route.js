import { NextRequest, NextResponse } from 'next/server';

export default function handler(req) {
  const { headers } = req;
  const token = headers.get('Authorization').split(' ')[1]; // Assuming "Bearer TOKEN"

  const newAuthorizationHeader = `Bearer ${token}`;

  const responseHeaders = new Headers(headers);
  responseHeaders.set('Authorization', newAuthorizationHeader);

  const responseData = {
    message: 'Authorization header modified successfully.'
  };

  return new Response(JSON.stringify(responseData), {
    headers: responseHeaders,
    status: 200
  });
}
