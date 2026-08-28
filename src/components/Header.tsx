import type {JSX} from "react";
import socialsData from "./../../public/jsons/socials.json";
import ScreenSize from "@/assets/data/enums/screenSize.ts";
import {getUserBrowserWidth} from "@/assets/helper_functions/userBrowser.ts";
import type SocialsData from "@/assets/data/socialsData.ts";
import SVGIcon from "@/components/SVGIcon.tsx";
const socials: SocialsData[] = socialsData as SocialsData[];
export default function Header(): JSX.Element {
    const polishCVUrl:  string = "/pdfs/pawel_wasilewski_cv_pl.pdf";
    const englishCVUrl: string = "/pdfs/pawel_wasilewski_cv_en.pdf";

    if (getUserBrowserWidth().valueOf() === ScreenSize.DESKTOP.valueOf()) {
        return (
            <header className="w-full min-w-1/4 min-h-full flex flex-col p-4 text-white">
                <section className={"w-full flex flex-col mb-4 md:mb-6"}>
                    <h1 className={"text-2xl md:text-3xl font-bold antialiased"}> Paweł Wasilewski </h1>
                    <p className={"text-base md:text-lg antialiased"}> Software Developer </p>
                </section>
                <nav className={"w-full flex flex-row items-center justify-start gap-4"}>
                    {socials.map((social: SocialsData, index: number): JSX.Element => (
                        <a
                            key={index}
                            href={social.socialProfileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={"hover:scale-110 transform-gpu duration-300"}>
                            <SVGIcon svgRoute={social.socialIcon} svgAlt={social.socialName} hexIfMonochrome={social.iconHex} />
                        </a>
                    ))}
                </nav>
                <a
                    href={polishCVUrl} target={"_blank"} rel={"noreferrer"}
                    className={"border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white w-fit duration-300 cursor-pointer text-left mt-4"}>
                    ‣ <span className={"pl-4"}> Pobierz CV </span>
                </a>
                <a
                    href={englishCVUrl} target={"_blank"} rel={"noreferrer"}
                    className={"border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white w-fit duration-300 cursor-pointer text-left mt-4"}>
                    ‣ <span className={"pl-4"}> Download CV </span>
                </a>
            </header>
        );
    } else {
        return (
            <header className="flex flex-col items-center p-4 bg-gray-800 text-white">
                <h1 className="text-xl font-bold mb-2">My Application</h1>
                <nav>
                    <ul className="flex flex-col space-y-2">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}