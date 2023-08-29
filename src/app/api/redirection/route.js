export default async (req, context) => {
    return NextResponse.redirect('/preferences', { context });
  };
  