import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");

  if (!name) {
    return NextResponse.json(
      { error: "Name parameter is required" },
      { status: 400 }
    );
  }

  const blobUrl = process.env[`FONT_${name.toUpperCase()}_URL`];

  if (!blobUrl)
    return NextResponse.json({ error: "Font not found" }, { status: 404 });

  // Fetch securely from Vercel Blob
  const response = await fetch(blobUrl, {
    headers: { Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}` },
  });

  if (!response.ok)
    return new Response("Unable to fetch font from Vercel blob", {
      status: 404,
    });

  // Stream back to client
  return new Response(response.body, {
    headers: {
      "Content-Type": "font/woff2",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
