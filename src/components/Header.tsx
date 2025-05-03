import { getConfig } from '@/app/actions/query';
import styles from '@/app/styles.module.css';
import { ConfigType } from '@/app/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
    const [navToggled, setNavToggled] = useState<boolean>(false);
    const [config, setConfig] = useState<ConfigType>();

    useEffect(() => {
        getConfig().then((data) => {
            setConfig(data);
        });
    },[])
    

    return <header className="fixed w-full z-[100] top-0 ">
        <div className="w-full h-[70px] px-[15px] md:px-[30px] bg-[#000000DD] flex flex-row justify-between items-center">
            <Link href="/" className="text-3xl md:text-4xl" style={{ fontFamily: 'Oleo Script Swash Caps'}}>Déerra Hill</Link>
            <nav className="hidden md:flex flex-row gap-[20px] items-center">
                <Link href="/#about" className="decoration-0"><p className="text-base md:text-lg font-semibold hover:underline underline-offset-4">About Me</p></Link>
                <Link href="/projects" className="decoration-0"><p className="text-base md:text-lg font-semibold hover:underline underline-offset-4">Projects</p></Link>
                <Link href="/education" className="decoration-0"><p className="text-base md:text-lg font-semibold hover:underline underline-offset-4">Education</p></Link>
                <Link href={config?.resume ? `/resources/${config?.resume}` : ''} className="decoration-0"><p className="text-base md:text-lg font-semibold hover:underline underline-offset-4">Resume</p></Link>
                <Link href={config?.connect_url ?? ''} className="relative decoration-0 w-fit h-fit">
                    <div className={`text-base md:text-lg font-medium px-[16px] py-[3px] text-black ${styles.unicornButton}`} style={{ borderRadius: "20px" }}>Let&apos;s Connect</div>
                </Link>
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" onClick={() => setNavToggled((prevVal) => !prevVal)} className="block md:hidden h-[35px] w-[35px] fill-white"><path d="M111.87-228.28v-91h736.26v91zm0-206.22v-91h736.26v91zm0-206.22v-91h736.26v91z"/></svg>
        </div>
        <nav className="w-full h-0 overflow-clip box-border px-[20px] pt-0 md:hidden flex flex-col gap-[10px] items-end bg-[#000000DD]" style={{height: navToggled ? "210px" : "0", transition: "height 1s"}}>
            <Link href="/#about" className="decoration-0"><p className="text-lg font-semibold hover:underline underline-offset-4">About Me</p></Link>
            <Link href="/projects" className="decoration-0"><p className="text-lg font-semibold hover:underline underline-offset-4">Projects</p></Link>
            <Link href="/education" className="decoration-0"><p className="text-lg font-semibold hover:underline underline-offset-4">Education</p></Link>
            <Link href="/projects" className="decoration-0"><p className="text-lg font-semibold hover:underline underline-offset-4">Resume</p></Link>
            <Link href="/projects" className="relative decoration-0 w-fit h-fit">
                <div className={`text-lg font-medium px-[16px] py-[3px] text-black ${styles.unicornButton}`} style={{ borderRadius: "20px" }}>Let&apos;s Connect</div>
            </Link>
        </nav>
    </header>
}