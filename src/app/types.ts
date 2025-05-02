export type HomePageType = {
  _updatedAt: string,
  carousel_title: string,
  about_image: { _type: string, asset: [Object] },
  main_cta_text: string,
  main_title: string,
  slug: { current: string, _type: string },
  hero_description: string,
  _type: string,
  about_button: string,
  about_title: string,
  section_description: string,
  about_description: string,
  section_image: { _type: string, asset: [Object] },
  section_title: string,
  main_supertitle: string,
  hero_subtitle: string,
  hero_title: string,
  main_cta_button: string,
  _createdAt: string,
  _id: string,
  carousel_projects: [ [Object] ],
  section_supertitle: string,
  _rev: string,
  section_button: string
}

export type CarouselItemType = {
  image: string;
  title: string;
  subtitle: string;
}