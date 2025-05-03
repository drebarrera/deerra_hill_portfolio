"use server"

import { client } from "@/sanity/client";
import { EducationPageType, HomePageType, ProjectPageType, ProjectType } from "../types";

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
        project_type,
        id
      },
    }
  `;

  const options = { next: { revalidate: 30 } };

  return await client.fetch<HomePageType[]>(POSTS_QUERY, {}, options);
}

export async function getProjectPage(): Promise<ProjectPageType[] | null> {
  const POSTS_QUERY = `*[
    _type == "projectpage"
    && defined(slug.current)
    ]|order(publishedAt desc)[0...1]{
      button_text,
      button_url,
      cta_text,
      page_description,
      page_title
    }
  `;

  const options = { next: { revalidate: 30 } };

  return await client.fetch<ProjectPageType[]>(POSTS_QUERY, {}, options);
}

export async function getEducationPage(): Promise<EducationPageType[] | null> {
  const POSTS_QUERY = `*[
    _type == "educationpage"
    && defined(slug.current)
    ]|order(publishedAt desc)[0...1]{
      button_text,
      button_url,
      cta_text,
      page_description,
      page_title,
      page_quote_author
    }
  `;

  const options = { next: { revalidate: 30 } };

  return await client.fetch<EducationPageType[]>(POSTS_QUERY, {}, options);
}

export async function getProjects(project_type: string): Promise<ProjectType[] | null> {
  const POSTS_QUERY = `*[
    _type == "project"
    && !(_id in path("drafts.**"))
    && project_type == "${project_type}"
    ]|order(publishedAt desc){
      id,
      title,
      subtitle,
      image,
      date,
      role,
      description,
      cta_text,
      cta_url
    }
  `;

  const options = { next: { revalidate: 30 } };

  return await client.fetch<ProjectType[]>(POSTS_QUERY, {}, options);
}