// /app/resources/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "next-sanity";

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const DATASET = "production";
const API_VERSION = "2023-01-01";

const sanity = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VERSION,
  useCdn: false,
});

export async function GET(
  req: NextRequest,
  context: { params: { slug?: string } }
) {
  const slug = (await context.params)?.slug;
  if (!slug) {
    return new NextResponse("Missing slug", { status: 400 });
  }

  const originalFilename = decodeURIComponent(slug);

  const query = `*[(_type == "sanity.fileAsset" || _type == "sanity.imageAsset") && originalFilename == $filename][0]`;
  const file = await sanity.fetch(query, { filename: originalFilename });

  if (!file || !file.url) {
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
      "Content-Disposition": `inline; filename="${originalFilename}"`,
    },
  });
}
