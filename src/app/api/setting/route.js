import { NextResponse } from 'next/server';
import { setCookie } from 'nookies';

export default async (req, context) => {
  if (req.method === 'POST') {
    const { preference } = req.body;
    setCookie(context, 'user_preference', preference, {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });
    return NextResponse.redirect('/preferences');
  }
};
