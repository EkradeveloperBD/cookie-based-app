export default async (req, context) => {
    const cookies = parseCookies(context);
    const userPreference = cookies.user_preference || 'No preference set';
  
    return new Response(`User Preference: ${userPreference}`, {
      headers: { 'Content-Type': 'text/plain' },
    });
  };
  