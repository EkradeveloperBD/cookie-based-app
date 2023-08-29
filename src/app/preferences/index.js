import React from 'react';
import { parseCookies } from 'nookies';

export default function Preferences() {
  const cookies = parseCookies();
  const userPreference = cookies.user_preference || 'No preference set';

  return (
    <div>
      <h2>Preferences</h2>
      <p>User Preference: {userPreference}</p>
    </div>
  );
}
