import type {JSX} from "react";
import type WorkExperienceData from "@/assets/data/workExperienceData.ts";

export default function JobField(props: WorkExperienceData): JSX.Element {
    return (
        <section className="w-full min-h-72 h-fit flex flex-row items-center justify-start rounded-2xl ...">
            <div className="w-2  self-stretch bg-linear-to-b from-red-400 to-blue-500" />

            <article className="w-full self-stretch flex flex-col items-start backdrop-blur-2xl justify-center gap-2 p-4">
                <section className={"w-full flex flex-row items-center justify-between"}>
                    <div className={"flex flex-row items-center justify-start gap-2 h-1/4"}>
                        <a href={props.companySiteUrl!} target="_blank" rel="noopener noreferrer" className={"flex flex-row items-center justify-start gap-2"}>
                            <img
                                src={props.companyLogo!}
                                className={"w-8 h-8 rounded-full"}
                                alt={props.company}/>
                            <h3 className={"text-lg font-bold text-white antialiased"}>
                                {props.position} at {props.company}
                            </h3>
                        </a>
                    </div>
                    <h4 className={"text-gray-300 antialiased"}>
                        {props.startDate} - {props.endDate} <br/>
                        {props.companyLocation}
                    </h4>
                </section>
                <section className={"w-full h-3/4 flex flex-col items-start justify-start gap-2"}>
                    {props.responsibilities.map((responsibility, index) => (
                        <article className={"flex flex-row items-start justify-start gap-2"} key={index}>
                            <p className={"font-bold bg-linear-to-r bg-clip-text text-transparent from-red-400 to-blue-500"}> ● </p>
                            <p className={"text-gray-200 antialiased text-justify"}>{responsibility}</p>
                        </article>
                    ))}
                </section>
            </article>
        </section>
    );
}