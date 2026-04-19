import type {JSX} from "react";
import glassmorphism from "../../helperFunctions/glassmorphism.ts";
import {
    SiAndroidstudio,
    SiAngular,
    SiDocker,
    SiDotnet,
    SiExpress,
    SiJavascript,
    SiMongodb,
    SiMongoose,
    SiMysql,
    SiNodedotjs,
    SiPrisma,
    SiPython,
    SiReact,
    SiTypescript
} from "@icons-pack/react-simple-icons";
import KnownTechnologyModal from "../experienceComponents/KnownTechnologyModal.tsx";
import type KnownTechnologyModalProps from "../../interfaces/props/KnownTechnologyProp.ts";


export default function _MainTechnologiesComponent(): JSX.Element {
    const mainlyUsedTechnologies: KnownTechnologyModalProps[] = [
        {technologyName: "TypeScript", technologyIcon: <SiTypescript className={"font-bold text-white scale-175"}/>},
        {technologyName: "NodeJS", technologyIcon: <SiNodedotjs className={"font-bold text-white scale-200"}/>},
        {technologyName: "React", technologyIcon: <SiReact className={"font-bold text-white scale-200"}/>},
        {technologyName: "Express", technologyIcon: <SiExpress className={"font-bold text-white scale-200"}/>},
        {technologyName: "ReactNative", technologyIcon: <SiReact className={"font-bold text-white scale-200"}/>},
        {technologyName: "MySQL", technologyIcon: <SiMysql className={"font-bold text-white scale-200"}/>},
        {technologyName: "Prisma", technologyIcon: <SiPrisma className={"font-bold text-white scale-200"}/>},
        {technologyName: "MongoDB", technologyIcon: <SiMongodb className={"font-bold text-white scale-200"}/>},
        {technologyName: "Mongoose", technologyIcon: <SiMongoose className={"font-bold text-white scale-200"}/>},
        {technologyName: "Docker", technologyIcon: <SiDocker className={"font-bold text-white scale-200"}/>},
    ];

    const alsoKnownTechnologies: KnownTechnologyModalProps[] = [
        {technologyName: "JavaScript", technologyIcon: <SiJavascript className={"font-bold text-white scale-175"}/>},
        {technologyName: "Angular", technologyIcon: <SiAngular className={"font-bold text-white scale-200"}/>},
        {technologyName: "Python", technologyIcon: <SiPython className={"font-bold text-white scale-200"}/>},
        {technologyName: "MAUI", technologyIcon: <SiDotnet className={"font-bold text-white scale-200"}/>},
        {technologyName: "WPF", technologyIcon: <SiDotnet className={"font-bold text-white scale-200"}/>},
        {technologyName: "JavaAndroid", technologyIcon: <SiAndroidstudio className={"font-bold text-white scale-200"}/>},
    ];

    return (<section
        className={`${glassmorphism} mx-auto mt-6 w-[92%] max-w-5xl rounded-2xl p-4 sm:mt-8 sm:p-6 md:p-7`}>
        <h2 className={"mb-4 font-primary text-xl font-bold text-gray-100 antialiased sm:text-2xl"}>Mainly used Technologies</h2>
        <article
            className={"flex flex-row flex-wrap items-stretch justify-center gap-4 text-center font-primary text-gray-100 antialiased sm:gap-5"}>
            {mainlyUsedTechnologies.map((technologyDisplayed: KnownTechnologyModalProps, index: number): JSX.Element => (
                <KnownTechnologyModal key={index} technologyName={technologyDisplayed.technologyName}
                                      technologyIcon={technologyDisplayed.technologyIcon}/>
            ))}
        </article>
        <h3 className={"mb-4 mt-6 font-primary text-lg text-gray-100 antialiased sm:text-xl"}>Also known Technologies</h3>
        <article
            className={"flex flex-row flex-wrap items-stretch justify-center gap-4 text-center font-primary text-gray-100 antialiased sm:gap-5"}>
            {alsoKnownTechnologies.map((technologyDisplayed: KnownTechnologyModalProps, index: number): JSX.Element => (
                <KnownTechnologyModal key={index} technologyName={technologyDisplayed.technologyName}
                                      technologyIcon={technologyDisplayed.technologyIcon}/>
            ))}
        </article>
    </section>)
}