import type {JSX} from "react";
/*
import {parts} from "@/assets/data/cvParts.ts";
import type CvPartsInterface from "@/assets/data/cvPartsInterface.ts";
 */
import ScreenSize from "@/assets/data/enums/screenSize.ts";
import {getUserBrowserWidth} from "@/assets/helper_functions/userBrowser.ts";

export default function Header(): JSX.Element {

    if (getUserBrowserWidth().valueOf() === ScreenSize.DESKTOP.valueOf()) {
        return (
            <header className="w-full min-w-1/4 min-h-full flex flex-col items-center p-4 text-white">
                <section className={"w-full flex flex-col mb-4 md:mb-6"}>
                    <h1 className={"text-2xl md:text-3xl font-bold antialiased"}> Paweł Wasilewski </h1>
                    <p className={"text-base md:text-lg antialiased"}> Software Developer </p>
                </section>
                {/*TODO make it unhidden if needed */}
                {/* <nav className={"w-full flex flex-col justify-center hidden"}>
                    {parts.map((part: CvPartsInterface, index: number): JSX.Element => (
                        <div key={part.sectionId} className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full border-2 border-accent bg-accent" />
                                {index !== parts.length - 1 && (
                                    <div className="w-px flex-1 min-h-24 md:min-h-36 bg-gray-400" />
                                )}
                            </div>

                            <a className="text-base md:text-lg leading-snug hover:animate-bounce duration-100 wrap-break-words" href={`#${part.sectionId}`}>
                                {part.sectionName}
                            </a>
                        </div>
                    ))}
                </nav> */}
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