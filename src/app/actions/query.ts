"use server"

import { client } from "@/sanity/client";
import { HomePageType } from "../types";

export async function getHomePage(): Promise<HomePageType[] | null> {
  const POSTS_QUERY = `*[
    _type == "homepage"
    && defined(slug.current)
    ]|order(publishedAt desc)[0...1]{
      carousel_title,
      about_image,
      main_image,
      main_cta_text,
      main_title,
      main_subtitle,
      slug,
      hero_description,
      about_button,
      about_title,
      about_supertitle,
      about_subtitle,
      section_description,
      about_description,
      section_image,
      section_title,
      main_supertitle,
      hero_subtitle,
      hero_title,
      main_cta_button,
      section_supertitle,
      section_subtitle,
      section_button,
      carousel_projects[]->{
        title,
        subtitle,
        image,
        id
      },
    }
  `;

  const options = { next: { revalidate: 30 } };

  return await client.fetch<HomePageType[]>(POSTS_QUERY, {}, options);
}