import type {JSX} from "react";
import type FirmDescriptionProp from "../../interfaces/props/FirmDescriptionProp.ts";

export default function FirmDescriptionModal(prop: FirmDescriptionProp): JSX.Element {
    return (<section className={"flex w-full"}>
        <article className={"w-full border-l-2 border-l-gray-100 pl-4 sm:pl-6 md:pl-8"}>
            <div className={"flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"}>
                <div className={"flex-col"}>
                    <h3 className={"wrap-break-word text-lg text-gray-100 sm:text-xl"}>{prop.firmName}</h3>
                    <p className={'inline-block wrap-break-word text-gray-300'}>{prop.fromXToY}</p>
                </div>
                <p className={"wrap-break-word text-left font-bold text-gray-100 antialiased sm:mr-2 sm:text-center"}>{prop.jobPosition}</p>
            </div>
            <hr className={"m-3 border-white/20 sm:m-4"}/>
            <ul className={"ml-2 list-inside list-disc sm:ml-4"}>
                {prop.summaryOfKnowledgeGained.map((description: string, index: number): JSX.Element => (
                    <li key={index} className={"wrap-break-word p-2 text-justify text-sm text-gray-100 antialiased sm:text-base"}> {description} </li>
                    ))}
            </ul>
        </article>
    </section>)
}