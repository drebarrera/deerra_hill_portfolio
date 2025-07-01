import Carousel from "../Carousel";
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { client } from "@/sanity/client";
import imageUrlBuilder from '@sanity/image-url';

import styles from "@/app/styles.module.css";
import { CarouselItemType, SanityImageType } from "@/app/types";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function buildImage(sanityImage: SanityImageType | undefined): ImageUrlBuilder | null {
  if (!sanityImage) return null;
  return builder.image(sanityImage);
}

export default function Main({ supertitle, title, subtitle, image, carousel_title, carousel_projects, cta_caption, cta_button_url, cta_button_text }: { supertitle: string, title: string, subtitle: string, image: SanityImageType | undefined, carousel_title: string, carousel_projects: CarouselItemType[] | undefined, cta_caption: string, cta_button_url: string, cta_button_text: string  } ) {
  return <section className="w-full flex flex-col justify-center md:p-[60px] gap-[30px]" style={{ background: "linear-gradient(to bottom, #1E001E 0%, #111111 100%" }}>
    <div className="w-full flex flex-col aspect-[2.5] items-center md:gap-[5px] pt-[15px] md:pt-[30px]" style={{ backgroundImage: `url('${buildImage(image)?.url() ?? ''}')`, backgroundSize: "cover", maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)", maskSize: "100% 100%", maskRepeat: "no-repeat" }}>
      <p className="text-lg md:text-2xl font-semibold">{supertitle}</p>
      <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "Squada One" }}>{title}</h2>
      <p className="text-lg md:text-2xl font-semibold">{subtitle}</p>
    </div>
    <div className="w-full flex flex-col max-w-[1500px] px-[25px] md:px-0 gap-[30px]">
      <h3 className="text-xl md:text-2xl">{carousel_title}</h3>
      <Carousel items={carousel_projects} />
      <div className="w-full flex flex-col justify-center items-center gap-[10px]">
        <p className="text-lg md:text-xl font-medium">{cta_caption}</p>
        <a href={cta_button_url} className="relative decoration-0 w-fit h-fit">
          <div className={`text-base md:text-lg font-medium px-[16px] py-[3px] text-black ${styles.unicornButton}`} style={{ borderRadius: "20px" }}>{cta_button_text}</div>
        </a>
      </div>
    </div>
  </section>;
}