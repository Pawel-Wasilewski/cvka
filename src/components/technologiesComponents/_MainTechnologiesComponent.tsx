import type {JSX} from "react";
import glassmorphism from "../../helperFunctions/glassmorphism.ts";

import KnownTechnologyModal from "../experienceComponents/KnownTechnologyModal.tsx";
import type KnownTechnologyModalProps from "../../interfaces/props/KnownTechnologyProp.ts";
import {alsoKnownTechnologies, mainlyUsedTechnologies} from "../../assets/data/mainlyUsedTechnologies.ts";


export default function _MainTechnologiesComponent(): JSX.Element {

    return (<section
        id={"technologies"}
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