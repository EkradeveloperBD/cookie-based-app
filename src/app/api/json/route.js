import { NextRequest } from 'next/server';

export default function handler(req) {
  const responseData = {
    message: "Welcome to our API!",
    version: "1.0"
  };

  return new Response(JSON.stringify(responseData), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
