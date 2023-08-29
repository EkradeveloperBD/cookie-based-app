export default async (req) => {
    const authorizationHeader = req.headers.get('Authorization');
    if (authorizationHeader) {
      const modifiedHeader = `Bearer ${authorizationHeader}`;
      const response = new Response(null, { headers: { Authorization: modifiedHeader } });
      return NextResponse.next(response);
    }
    
    return new Response('No Authorization header found.', { status: 400 });
  };
  