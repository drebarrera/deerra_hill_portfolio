"use client"

import { useEffect, useState } from "react";
import '@/assets/fonts/fonts.css';

import Header from "@/components/Header";
import About from '@/components/index/About';
import Education from '@/components/index/Education';
import Hero from "@/components/index/Hero";
import Main from "@/components/index/Main";
import { getHomePage } from "@/app/actions/query";
import { CarouselItemType, HomePageType } from "@/app/types";

export default function IndexPage() {
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [pageError, setPageError] = useState<boolean>(false);
  const [homePageContent, setHomePageContent] = useState<HomePageType>();

  useEffect(() => {
    getHomePage().then((data) => {
      if (data && data.length) setHomePageContent(data[0]);
      else setPageError(true);
      setPageLoading(false);
    });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -100; // Scroll 40px above the element
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [homePageContent]);

  return (
    <main className="relative w-full text-white overflow-clip" style={{ fontFamily: "Inter" }}>
        <Header/>
        <Hero title={pageError ? 'Error: Site Unavailable' : homePageContent?.hero_title ?? ''} subtitle={homePageContent?.hero_subtitle ?? ''} description={homePageContent?.hero_description ?? ''} image={homePageContent?.hero_image} />
        {!pageLoading && <>
          <Main supertitle={homePageContent?.main_supertitle ?? ''} title={homePageContent?.main_title ?? ''} subtitle={homePageContent?.main_subtitle ?? ''} image={homePageContent?.main_image} carousel_title={homePageContent?.carousel_title ?? ''} carousel_projects={homePageContent?.carousel_projects as CarouselItemType[] | undefined} cta_caption={homePageContent?.main_cta_text ?? ''} cta_button_url={homePageContent?.main_cta_button_url ?? ''} cta_button_text={homePageContent?.main_cta_button ?? ''} />
          <Education supertitle={homePageContent?.section_supertitle ?? ''} title={homePageContent?.section_title ?? ''} subtitle={homePageContent?.section_subtitle ?? ''}  description={homePageContent?.section_description ?? ''} button_url={homePageContent?.section_button_url ?? ''} button_text={homePageContent?.section_button ?? ''}  image={homePageContent?.section_image} />
          <About supertitle={homePageContent?.about_supertitle ?? ''} title={homePageContent?.about_title ?? ''} subtitle={homePageContent?.about_subtitle ?? ''}  description={homePageContent?.about_description ?? ''} button_url={homePageContent?.about_button_url ?? ''}  button_text={homePageContent?.about_button ?? ''}  image={homePageContent?.about_image}/>
        </>}
    </main>
  );
}