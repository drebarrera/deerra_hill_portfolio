import styles from "@/app/styles.module.css";

export default function About() {
  return <section className="w-full h-fit py-[120px] px-[60px] flex justify-center items-center" style={{ background: "radial-gradient(#6E236E 0%, #111111 60%)" }}>
    <div className="max-w-[1500px] w-full h-fit flex flex-row justify-between items-center gap-[50px]">
    <div className="w-full min-h-[400px] h-[full]" style={{ background: "url('/assets/index/deerra_hill.webp')", backgroundSize: "cover", backgroundPosition: "0" }}></div>
      <div className="w-full h-fit flex flex-col gap-[15px]">
        <h2 className="text-2xl md:text-3xl font-medium">Author • Educator • Producer</h2>
        <p className="text-base md:text-lg">I’m a filmmaker, writer, and educator with a passion for storytelling and media production. I earned my BFA in Digital Film & Video Production from the Art Institute of San Antonio and later got my MFA in Screenwriting and Stage Writing from Point Park University. Right now, I teach Audio/Visual & Business at Premier High School, where I help students learn video production, editing, and storytelling in a hands-on way. Before that, I interned in the Screenwriting Department at the Austin Film Festival, where I reviewed scripts and handled communications. Over the years, I’ve worked in different media roles, including Media Equipment Supervisor, Audio Engineer, and Production Assistant. I’ve also written and directed projects that have been showcased at places like the Alamo Drafthouse and Santikos Bijou Theater. I’m certified in Adobe Photoshop and Communication Skills for Business, and I’m always looking to grow my skills while helping others bring their creative visions to life.</p>
        <a href="/education" className="relative decoration-0 w-fit h-fit">
          <div className={`text-base md:text-lg font-medium px-[16px] py-[3px] text-black ${styles.unicornButton}`} style={{ borderRadius: "20px" }}>Step into my classroom &rarr;</div>
        </a>
      </div>
    </div>
  </section>
}