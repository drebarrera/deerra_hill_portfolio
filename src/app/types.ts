export type HomePageType = {
  carousel_title: string;
  about_image: SanityImageType;
  main_image: SanityImageType;
  main_cta_text: string;
  main_cta_button_url: string;
  main_title: string;
  main_subtitle: string;
  hero_description: string;
  about_button: string;
  about_button_url: string;
  about_title: string;
  about_supertitle: string;
  about_subtitle: string;
  section_description: string;
  about_description: string;
  section_image: SanityImageType;
  section_title: string;
  main_supertitle: string;
  hero_subtitle: string;
  hero_title: string;
  hero_image: SanityImageType;
  main_cta_button: string;
  carousel_projects: [ [object] ];
  section_supertitle: string;
  section_subtitle: string;
  section_button: string;
  section_button_url: string;
}

export type ProjectPageType = {
  button_text: string;
  button_url: string;
  cta_text: string;
  page_description: string;
  page_title: string;
}

export type EducationPageType = {
  button_text: string;
  button_url: string;
  cta_text: string;
  page_description: string;
  page_title: string;
  page_quote_author: string;
}

export type CarouselItemType = {
  id: string;
  image: SanityImageType | undefined;
  title: string;
  subtitle: string;
  project_type: string;
}

export type SanityImageType = {
  _type: string;
  asset: [object];
};

export type ProjectType = {
  id: string;
  title: string;
  subtitle: string;
  image: SanityImageType | undefined;
  date: string;
  role: string;
  description: string;
  cta_text: string;
  cta_url: string;
}

export type ResourceType = {
  id: string;
  name: string | undefined;
  location: string | undefined; 
}

export type ConfigType = {
  connect_url: string;
  resume: string;
}