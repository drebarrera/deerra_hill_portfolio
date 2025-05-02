"use server"

import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { HomePageType } from "../types";

export async function getHomePage(): Promise<HomePageType[] | null> {
  const POSTS_QUERY = `*[
    _type == "homepage"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...1]`;

  const options = { next: { revalidate: 30 } };

  return await client.fetch<HomePageType[]>(POSTS_QUERY, {}, options);
}