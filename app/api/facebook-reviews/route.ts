export async function GET() {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

  if (!pageId || !accessToken) {
    return Response.json(
      { error: "Facebook configuration is missing" },
      { status: 500 }
    );
  }

  const url =
    `https://graph.facebook.com/v26.0/${pageId}/ratings` +
    `?fields=created_time,recommendation_type,review_text` +
    `&access_token=${accessToken}`;

  const response = await fetch(url, {
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    return Response.json(
      { error: data },
      { status: response.status }
    );
  }

  return Response.json(data);
}