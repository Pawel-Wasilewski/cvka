import type {JSX} from "react";
import glassmorphism from "../../helperFunctions/glassmorphism.ts";
import type FirmDescripctionProp from "../../interfaces/props/FirmDescripctionProp.ts";
import FirmDescriptionModal from "./FirmDescriptionModal.tsx";

export default function _MainExperienceComponent(): JSX.Element {
    const experience: FirmDescripctionProp[] = [
        {
            firmName: "Soft-K - Gierałtowice",
            jobPosition: "Intern",
            fromXToY: "2025-11 - 2025-11 (24 days)",
            summaryOfKnowledgeGained: [
                "I was exposed to work in TypeScript driven technologies: React, Express etc., which allowed me to gain practical experience in web development and understand the intricacies of building modern web applications.",
                "I was suppervised by senior developer which given me oportunity to creative feedback about my fundamentals"
            ]
        },
        {
            firmName: "Globodain - Sewille",
            jobPosition: "Intern",
            fromXToY: "2025-05 - 2025-06 (30 days)",
            summaryOfKnowledgeGained: [
                "First encounter with the world of professional software development, where I had the opportunity to work on real projects and gain practical experience in programming.",
                "I had the chance to work with a team of experienced developers, which allowed me to learn about teamwork, communication, and project management in a professional environment.",
                "During my ERASMUS+ internship, I was exposed to various technologies in Python and tools used in software development, which broadened my technical skills and knowledge.",
                "I also had the opportunity to contribute to real projects, which gave me a sense of accomplishment and motivation to continue learning and growing in the field of software development."
            ]
        }
    ]

    return (<div className={glassmorphism + "margin-auto mt-10 p-8 rounded-lg w-2/3 flex flex-row gap-10 justify-between flex-wrap"}>
        <h1 className={"text-3xl text-gray-100 font-bold antialiased font-primary"}> Experience </h1>

        {experience.map((firmDescription: FirmDescripctionProp, index: number): JSX.Element => (
            <FirmDescriptionModal firmName={firmDescription.firmName} fromXToY={firmDescription.fromXToY} jobPosition={firmDescription.jobPosition} summaryOfKnowledgeGained={firmDescription.summaryOfKnowledgeGained} key={index}/>
        ))}
    </div>)
}