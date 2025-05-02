import styles from "@/app/styles.module.css";

export default function Education() {
  return <section className="w-full h-fit py-[120px] px-[60px] flex justify-center items-center" style={{ background: "linear-gradient(to bottom, #111111 0%, #11111100 15%, #11111100 85%, #111111 100%), #6E236E" }}>
    <div className="max-w-[1500px] w-full h-fit flex flex-row justify-between items-center gap-[50px]">
      <div className="w-full h-fit flex flex-col gap-[15px]">
        <div className="flex flex-col gap-[5px]">
          <h2 className="text-lg md:text-xl font-medium">Educator,</h2>
          <p className="text-2xl md:text-3xl font-medium">Déerra Hill</p>
        </div>
        <p className="text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="/education" className="relative decoration-0 w-fit h-fit">
          <div className={`text-base md:text-lg font-medium px-[16px] py-[3px] text-black ${styles.unicornButton}`} style={{ borderRadius: "20px" }}>Step into my classroom &rarr;</div>
        </a>
      </div>
      <div className="w-full min-h-[400px] h-full" style={{ background: "url('/assets/index/deerra_hill_classroom.webp')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
    </div>
  </section>
}