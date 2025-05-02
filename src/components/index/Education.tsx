import styles from "@/app/styles.module.css";
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { client } from "@/sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageType } from "@/app/types";

const builder = imageUrlBuilder(client);

function buildImage(sanityImage: SanityImageType | undefined): ImageUrlBuilder | null {
  if (!sanityImage) return null;
  return builder.image(sanityImage);
}

export default function Education({ supertitle, title, subtitle, description, button_text, image }: {supertitle: string, title: string, subtitle: string, description: string, button_text: string, image: SanityImageType | undefined}) {
  return <section className="w-full h-fit py-[120px] px-[60px] flex justify-center items-center" style={{ background: "linear-gradient(to bottom, #111111 0%, #11111100 15%, #11111100 85%, #111111 100%), #6E236E" }}>
    <div className="max-w-[1500px] w-full h-fit flex flex-row justify-between items-center gap-[50px]">
      <div className="w-full h-fit flex flex-col gap-[15px]">
        <h2 className="text-2xl md:text-3xl font-medium flex flex-col">
          <span className="text-lg md:text-xl">{supertitle}</span>
          {title}
          <span className="text-lg md:text-xl">{subtitle}</span>
        </h2>
        <p className="text-base md:text-lg">{description}</p>
        <a href="/education" className="relative decoration-0 w-fit h-fit">
          <div className={`text-base md:text-lg font-medium px-[16px] py-[3px] text-black ${styles.unicornButton}`} style={{ borderRadius: "20px" }}>{button_text}</div>
        </a>
      </div>
      <div className="w-full h-full">
        <img 
            className="w-full h-full object-cover" 
            src={buildImage(image)?.width(1000)?.url() ?? ''} 
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            alt={`${supertitle} ${title} ${subtitle}`}
          />
      </div>
    </div>
  </section>
}