import {type JSX} from "react";
import type Technologies from "@/assets/data/technologies.ts";
import technologiesData from "./../../public/jsons/technologies.json";
import {Marquee} from "@/components/shadcn-space/animations/marquee.tsx";
import SVGIcon from "@/components/SVGIcon.tsx";
const technologies = technologiesData as Technologies[];

export default function TechnologiesCarousel(): JSX.Element {
    return (
        <article className={"flex flex-col justify-center w-full min-h-0 p-4 gap-4"}>
            <h3 className={"text-lg font-bold text-white antialiased"}> My main Tech-Stack </h3>
            <Marquee className="[--duration:40s] p-0 w-full min-w-0 overflow-hidden m-4">
                {technologies.map((tech: Technologies): JSX.Element => (
                    <div
                        key={tech.name}
                        className={"flex w-52 h-12 items-center justify-between gap-4 p-4 rounded-2xl"}
                        style={{backgroundColor: tech.backgroundHex}}>
                        <SVGIcon
                            svgRoute={tech.icon}
                            svgAlt={tech.name}
                            hexIfMonochrome={tech.foregroundHex}
                            svgWidth={"24px"}
                            svgHeight={"24px"}/>
                        <h4 className="text-lg font-bold"
                            style={{color: tech.foregroundHex}}>
                            {tech.name}
                        </h4>
                    </div>
                ))}
            </Marquee>
        </article>
    );
}