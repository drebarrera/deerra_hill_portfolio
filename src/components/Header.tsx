import styles from '@/app/styles.module.css';

export default function Header() {
    return <header className="fixed w-full z-[100] top-0 h-[55px] md:h-[70px] px-[15px] md:px-[30px] bg-[#000000DD] flex flex-row justify-between items-center">
        <p className="text-2xl md:text-4xl" style={{ fontFamily: 'Oleo Script Swash Caps'}}>Déerra Hill</p>
        <nav className="hidden md:flex flex-row gap-[20px] items-center">
            <a href="#about" className="decoration-0"><p className="text-base md:text-lg font-semibold hover:underline underline-offset-4">About Me</p></a>
            <a href="/projects" className="decoration-0"><p className="text-base md:text-lg font-semibold hover:underline underline-offset-4">Projects</p></a>
            <a href="/education" className="decoration-0"><p className="text-base md:text-lg font-semibold hover:underline underline-offset-4">Education</p></a>
            <a href="/projects" className="decoration-0"><p className="text-base md:text-lg font-semibold hover:underline underline-offset-4">Resume</p></a>
            <a href="/projects" className="relative decoration-0 w-fit h-fit">
                <div className={`text-base md:text-lg font-medium px-[16px] py-[3px] text-black ${styles.unicornButton}`} style={{ borderRadius: "20px" }}>Let&apos;s Connect</div>
            </a>
        </nav>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="block md:hidden h-[30px] w-[30px] fill-white"><path d="M111.87-228.28v-91h736.26v91zm0-206.22v-91h736.26v91zm0-206.22v-91h736.26v91z"/></svg>
    </header>;
}