import { CarouselItemType } from "@/types/carousel";

export default function Carousel({ items }: { items: CarouselItemType[] }) {
  return <div className="w-full flex flex-row gap-[30px]">
    {items.length ? items.map((carouselItem) => 
      <div>
      </div>
    ) : [...Array(5)].map((_, i) => 
      <div key={i} className="w-[255px] h-fit flex flex-col gap-[10px] justify-center itemrs-center">
        <div className="w-[225px] aspect-[45/70] bg-[#333333] animate-pulse"></div>
        <div className="flex flex-col gap-[5px] justify-center itemrs-center">
          <p className="animate-pulse text-center">Loading...</p>
          <p className="animate-pulse text-center">•••</p>
        </div>
      </div>
    )}
  </div>;
}