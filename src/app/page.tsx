"use client"

import { useEffect, useState } from "react";
import { type SanityDocument } from "next-sanity";
import '@/assets/fonts/fonts.css';

import Header from "@/components/Header";
import About from '@/components/index/About';
import Education from '@/components/index/Education';
import Hero from "@/components/index/Hero";
import Main from "@/components/index/Main";
import { getHomePage } from "./actions/query";
import { HomePageType } from "./types";

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

  return (
    <main className="relative w-full text-white" style={{ fontFamily: "Inter" }}>
        {!pageLoading && <Header/>}
        <Hero title={pageError ? 'Error: Site Unavailable' : homePageContent?.hero_title ?? ''} subtitle={homePageContent?.hero_subtitle ?? ''} description={homePageContent?.hero_description ?? ''} />
        {!pageLoading && <>
          <Main/>
          <Education/>
          <About/>
        </>}
    </main>
  );
}