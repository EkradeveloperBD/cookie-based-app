export default async () => {
    const jsonData = {
      message: 'Welcome to our API!',
      version: '1.0',
    };
  
    return new Response(JSON.stringify(jsonData), {
      headers: { 'Content-Type': 'application/json' },
    });
  };
  