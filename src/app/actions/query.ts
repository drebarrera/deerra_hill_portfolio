"use server"

import { client } from "@/sanity/client";
import { ConfigType, EducationPageType, HomePageType, ProjectPageType, ProjectType, ResourceType } from "../types";

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
      hero_image,
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

export async function getResources(): Promise<ResourceType[] | null> {
  const POSTS_QUERY = `*[_type == "sanity.fileAsset" || _type == "sanity.imageAsset"]`;

  const options = { next: { revalidate: 30 } };

  const result = await client.fetch(POSTS_QUERY, {}, options);

  const results = [];
  for (let r of result) {
    const id = r?._id;
    if (id) {
      const REF_QUERY = `*[references("${id}")][0]`;
      const options = { next: { revalidate: 30 } };
      const ref_result = await client.fetch(REF_QUERY, {}, options);
      results.push({name: r?.originalFilename ?? '', location: ref_result?._type ?? '', id: r?._id});
    }
  }
  return results;
}

export async function deleteResource(id: string): Promise<boolean> {
  try {
    await client.delete(id);
  } catch (error) {
    console.error('Error deleting asset:', error, id);
    return false;
  }
  return true;
}

export async function getConfig(): Promise<ConfigType> {
  const CONFIG_QUERY = `*[
    _type == "config"
    && defined(slug.current)
    ]|order(publishedAt desc)[0] {
      connect_url,
      resume
    }
  `;

  const options = { next: { revalidate: 30 } };

  const configResult =  await client.fetch(CONFIG_QUERY, {}, options);

  if (configResult?.resume?.asset?._ref) {
    const RESUME_QUERY = `*[_type == "sanity.fileAsset" && _id == $ref][0]`;
    const resume = await client.fetch(RESUME_QUERY, {ref: configResult.resume.asset._ref});
    configResult.resume = resume.originalFilename;
  }
  
  return configResult;
}