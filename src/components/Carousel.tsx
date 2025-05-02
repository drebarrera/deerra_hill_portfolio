import { CarouselItemType, SanityImageType } from "@/app/types";
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { client } from "@/sanity/client";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function buildImage(sanityImage: SanityImageType | undefined): ImageUrlBuilder | null {
  if (!sanityImage) return null;
  return builder.image(sanityImage);
}

export default function Carousel({ items }: { items: CarouselItemType[] | undefined }) {
  return <div className="w-full flex flex-row gap-[30px]">
    {items && items.length ? items.map((carouselItem) => 
      <a key={carouselItem.id}  href={`/projects/#${carouselItem.id}`} className="decoration-0">
        <div className="w-[225px] h-fit flex flex-col gap-[10px] justify-center items-center">
          <div className="w-[225px] aspect-[45/70] bg-[#333333]" style={{backgroundImage: `url('${buildImage(carouselItem.image)?.width(500)?.url()}')`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
          <div className="w-full flex flex-col gap-[5px] justify-center itemrs-center">
            <p className="w-full text-center font-semibold text-lg md:text-xl">{carouselItem?.title ?? ''}</p>
            <p className="w-full text-center text-base md:text-lg">{carouselItem?.subtitle ?? ''}</p>
          </div>
        </div>
      </a>
    ) : [...Array(5)].map((_, i) => 
      <div key={i} className="w-[225px] h-fit flex flex-col gap-[10px] justify-center items-center">
        <div className="w-[225px] aspect-[45/70] bg-[#333333] animate-pulse"></div>
        <div className="w-full flex flex-col gap-[5px] justify-center itemrs-center">
          <p className="w-full text-center">•••</p>
          <p className="w-full text-center text-transparent">•••</p>
        </div>
      </div>
    )}
  </div>;
}