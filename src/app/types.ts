export type HomePageType = {
  carousel_title: string;
  about_image: { _type: string; asset: [Object] };
  main_image: { _type: string; asset: [Object] };
  main_cta_text: string;
  main_title: string;
  main_subtitle: string;
  slug: { current: string; _type: string };
  hero_description: string;
  about_button: string;
  about_title: string;
  about_supertitle: string;
  about_subtitle: string;
  section_description: string;
  about_description: string;
  section_image: { _type: string; asset: [Object] };
  section_title: string;
  main_supertitle: string;
  hero_subtitle: string;
  hero_title: string;
  main_cta_button: string;
  carousel_projects: [ [Object] ];
  section_supertitle: string;
  section_subtitle: string;
  section_button: string
}

export type CarouselItemType = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}