import type {JSX} from "react";
import type FirmDescriptionProp from "../../interfaces/props/FirmDescripctionProp.ts";

export default function FirmDescriptionModal(prop: FirmDescriptionProp): JSX.Element {
    return (<section className={"flex flex-row"}>
        <article className={"pl-8 border-l-gray-100 border-l-2"}>
            <div className={"flex flex-row items-center justify-between"}>
                <div className={"flex-col"}>
                    <h3 className={"text-xl text-gray-100"}>{prop.firmName}</h3>
                    <p className={'inline-block text-gray-300'}>{prop.fromXToY}</p>
                </div>
                <p className={"mr-15 text-center font-bold antialiased text-gray-100"}>{prop.jobPosition}</p>
            </div>
            <hr className={"text-gray-100 m-4"}/>
            <ul className={"list-inside list-disc ml-4"}>
                {prop.summaryOfKnowledgeGained.map((description: string, index: number): JSX.Element => (
                    <li key={index} className={"text-gray-100 antialiased text-justify p-2"}> {description} </li>
                    ))}
            </ul>
        </article>
    </section>)
}