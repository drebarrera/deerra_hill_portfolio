import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { client } from "@/sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageType } from "@/app/types";

const builder = imageUrlBuilder(client);

function buildImage(sanityImage: SanityImageType | undefined): ImageUrlBuilder | null {
  if (!sanityImage) return null;
  return builder.image(sanityImage);
}

export default function Hero({ title, subtitle, description, image }: { title: string, subtitle: string, description: string, image: SanityImageType | undefined }) {
  return (
    <section
      className="w-[100vw] h-[100vh] flex justify-center items-center"
      style={{
        background:
          "linear-gradient(to bottom, #EED7FA33 0%, #EED7FA33 40%, #EED7FA33 70%, #1E001E 100%, #EED7FA 130%, #EED7FA 230%), var(--unicorn)",
      }}
    >
      <div className="w-full max-w-[1100px] px-[25px] flex flex-row flex-wrap md:flex-nowrap justify-between items-center gap-[30px]">
        <div className="w-full flex flex-col gap-[15px]">
          <div className="w-fit flex flex-col md:flex-row md:gap-x-[20px] items-end flex-wrap">
            <h1 className="text-4xl md:text-5xl font-semibold">{title}</h1>
            <em className="text-xl md:text-2xl font-semibold">
              {subtitle}
            </em>
          </div>
          <p className="w-full max-w-[450px] text-xl md:text-2xl font-medium">
            {description}
          </p>
        </div>
        <div className="w-full h-[300px] md:h-[500px]" style={{ backgroundImage: `url('${buildImage(image)?.height(700)?.url() ?? ''}')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
      </div>
    </section>
  );
}
