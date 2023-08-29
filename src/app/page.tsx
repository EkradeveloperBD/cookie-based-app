import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Cookie-Based Web App</h1>
      <Link href="/setting">setting</Link>
      <Link href="/preferences">
        <h1>Go to Preferences</h1>
      </Link>
    </div>
  );
}
