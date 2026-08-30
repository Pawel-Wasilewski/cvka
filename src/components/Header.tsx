import type {JSX} from "react";
import socialsData from "./../../public/jsons/socials.json";
import type SocialsData from "@/assets/data/socialsData.ts";
import SVGIcon from "@/components/SVGIcon.tsx";
const socials: SocialsData[] = socialsData as SocialsData[];
export default function Header(): JSX.Element {
    const polishCVUrl:  string = "/pdfs/pawel_wasilewski_cv_pl.pdf";
    const englishCVUrl: string = "/pdfs/pawel_wasilewski_cv_en.pdf";

    return (
        <header className={"w-full lg:min-w-1/4 min-h-full flex flex-col p-4 text-white animate-in fade-in slide-in-from-left-20 duration-700"}>
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
            <section className={"w-full flex flex-row sm:items-center sm:justify-start gap-4 mt-4 sm:mt-0"}>
                <a
                    href={polishCVUrl} target={"_blank"} rel={"noreferrer"}
                    className={"border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white w-fit duration-300 cursor-pointer text-left mt-4"}>
                    ‣ <span className={"pl-4"}> Pobierz CV </span>
                </a>
                <br/>
                <a
                    href={englishCVUrl} target={"_blank"} rel={"noreferrer"}
                    className={"border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white w-fit duration-300 cursor-pointer text-left mt-4"}>
                    ‣ <span className={"pl-4"}> Download CV </span>
                </a>
            </section>
        </header>
    );
}