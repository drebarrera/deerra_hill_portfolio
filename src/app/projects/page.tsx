"use client"

import { useEffect, useState } from "react";
import '@/assets/fonts/fonts.css';

import Header from "@/components/Header";
import { getProjectPage, getProjects } from "@/app/actions/query";
import { ProjectPageType, ProjectType } from "@/app/types";
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { client } from "@/sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageType } from "@/app/types";

import styles from "@/app/styles.module.css";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function buildImage(sanityImage: SanityImageType | undefined): ImageUrlBuilder | null {
  if (!sanityImage) return null;
  return builder.image(sanityImage);
}

export default function ProjectsPage() {
  const [projectPageContent, setProjectPageContent] = useState<ProjectPageType>();
  const [projectContent, setProjectContent] = useState<ProjectType[]>();

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
  }, [projectContent]);

  useEffect(() => {
    getProjectPage().then((data) => {
      if (data && data.length) setProjectPageContent(data[0]);
      getProjects('projects').then((data) => {
        if (data && data.length) setProjectContent(data);
      });
    });
  }, []);

  return (
    <main className="relative w-full text-white overflow-clip" style={{ fontFamily: "Inter" }}>
        <Header/>
        <section className="w-full h-fit py-[100px] md:py-[150px] px-[25px] md:px-[60px] gap-[50px] flex flex-col justify-center items-center" style={{ background: "linear-gradient(to bottom, #1E001E 0%, #111111 100%)" }}>
          <div className="w-full max-w-[1200px] flex flex-col gap-[30px] items-center">
            <h1 className="text-4xl md:text-5xl" style={{ fontFamily: "Squada One" }}>{projectPageContent?.page_title ?? ''}</h1>
            <p className="text-base md:text-lg">{projectPageContent?.page_description ?? ''}</p>
          </div>
          <div className="flex flex-col gap-[10px] items-center">
            <p className="text-base md:text-lg">{projectPageContent?.cta_text ?? ''}</p>
            <Link href={projectPageContent?.button_url ?? ''} className="relative decoration-0 w-fit h-fit">
              <div className={`text-base md:text-lg font-medium px-[16px] py-[3px] text-black ${styles.unicornButton}`} style={{ borderRadius: "20px" }}>{projectPageContent?.button_text ?? ''}</div>
            </Link>
          </div>
          <div className="w-full max-w-[1200px] flex flex-col gap-[30px] items-center">
            {
              projectContent && projectContent.length ? projectContent.map((projectData) => 
                <div key={projectData.id} id={projectData.id} className="w-full md:h-[400px] py-[20px] px-[20px] md:px-[30px] flex flex-row flex-wrap md:flex-nowrap gap-[20px] bg-[#222222] justify-center" style={{ borderRadius: "50px" }}>
                  { projectData.image ? <img src={`${buildImage(projectData.image)?.url() ?? ''}`} className="w-[175px] md:w-[225px] aspect-[45/70] bg-[#333333]" />
                    : <div className="w-[175px]  md:w-[225px] aspect-[45/70] bg-[#333333] shrink-0" />
                  }
                  <div className="w-full flex flex-col gap-[20px]">
                    <div className="flex flex-col gap-[5px] md:gap-[10px]">
                      <h3 className="text-2xl md:text-3xl">{projectData.title ?? ''}</h3>
                      <p className="text-lg md:text-xl">{[projectData.date, projectData.role, projectData.subtitle].filter(Boolean).join(' • ')}</p>
                    </div>
                    <p>{projectData.description ?? ''}</p>
                    <Link href={projectData.cta_url ?? ''} className="font-semibold text-base md:text-lg text-center md:text-left">{projectData.cta_text}</Link>
                  </div>
                </div>
              ) :[...Array(3)].map((_, i) => 
                <div key={i} className="w-full h-[400px] py-[20px] px-[30px] flex flex-row gap-[20px] bg-[#222222] animate-pulse" style={{ borderRadius: "50px" }} />
              )
            }
          </div>
          <div className="flex flex-col gap-[10px] items-center">
            <p className="text-base md:text-lg">{projectPageContent?.cta_text ?? ''}</p>
            <Link href={projectPageContent?.button_url ?? ''} className="relative decoration-0 w-fit h-fit">
              <div className={`text-base md:text-lg font-medium px-[16px] py-[3px] text-black ${styles.unicornButton}`} style={{ borderRadius: "20px" }}>{projectPageContent?.button_text ?? ''}</div>
            </Link>
          </div>
        </section>
        <footer className="w-full bg-black py-[4px] flex flex-row justify-between px-[50px] items-center font-mono">
          <p className="font-medium text-base">Designed and developed by <a href="https://www.drebarrera.com" className="font-semibold">Andrés Barrera</a></p>
          <img src="/assets/hoo_and_dinkle.webp" className="h-[50px]"/>
        </footer>
    </main>
  );
}