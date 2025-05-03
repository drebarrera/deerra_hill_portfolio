// src/app/resources/[slug]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "next-sanity";

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
});

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
): Promise<NextResponse> {
  const slug = decodeURIComponent(params.slug);

  const query = `*[
    (_type == "sanity.fileAsset" || _type == "sanity.imageAsset")
    && originalFilename == $filename
  ][0]`;

  const file = await sanity.fetch(query, { filename: slug });

  if (!file?.url) {
    return new NextResponse("File not found", { status: 404 });
  }

  const response = await fetch(file.url);

  if (!response.ok) {
    return new NextResponse("Failed to fetch file", { status: 502 });
  }

  const buffer = await response.arrayBuffer();

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": response.headers.get("content-type") || "application/octet-stream",
      "Content-Disposition": `inline; filename="${slug}"`,
    },
  });
}
