import Carousel from "../Carousel";

import styles from "@/app/styles.module.css";

export default function Main() {
  return <section className="w-full flex flex-col justify-center p-[60px]" style={{ background: "linear-gradient(to bottom, #1E001E 0%, #111111 100%" }}>
    <div className="w-full flex flex-col aspect-[12/5] items-center gap-[5px]">
      <p className="text-xl md:text-2xl font-semibold">welcome to</p>
      <p className="text-4xl md:text-5xl" style={{ fontFamily: "Squada One" }}>THE DÉERRAVERSE</p>
    </div>
    <div className="w-full flex flex-col max-w-[1500px] gap-[15px]">
      <h3 className="text-xl md:text-2xl">FEATURED</h3>
      <Carousel items={[]} />
      <div className="w-full flex flex-col justify-center items-center gap-[10px]">
        <p className="text-lg md:text-xl font-medium">Curious of what else I've been creating?</p>
        <a href="/projects" className="relative decoration-0 w-fit h-fit">
          <div className={`text-base md:text-lg font-medium px-[16px] py-[3px] text-black ${styles.unicornButton}`} style={{ borderRadius: "20px" }}>Dive into the Déerraverse</div>
        </a>
      </div>
    </div>
  </section>;
}