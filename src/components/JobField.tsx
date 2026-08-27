import type {JSX} from "react";
import type WorkExperienceData from "@/assets/data/workExperienceData.ts";

export default function JobField(props: WorkExperienceData): JSX.Element {
    return (
        <section className={"w-full h-full flex flex-col items-center justify-center"}>
            <section className={"w-full flex flex-row"}>
                <section className={"w-1/2 flex flex-row items-center justify-start"}>
                    {props.companyLogo !== undefined ? (
                        <img src={props.companyLogo!} alt="Company Logo" className={"w-16 h-16 object-contain"} />
                    ) : (
                        <img src={"https://upload.wikimedia.org/wikipedia/commons/e/ea/Image_placeholder.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"} alt="Company Logo" className={"w-16 h-16 object-contain"} />
                    )}
                    <h3 className={"text-lg font-bold text-white antialiased ml-4"}>

                        {props.company}
                    </h3>
                </section>
                <section className={"w-1/2 flex flex-row items-center justify-end"}>
                    <h4 className={"text-gray-300 antialiased"}>
                        {props.position}<br/>
                        {props.startDate} - {props.endDate}
                    </h4>
                </section>
            </section>
            <h4 className={"text-gray-300 antialiased"}>
                📍 {props.companyLocation}
            </h4>
            <article className={"w-full flex flex-col justify-between"}>
                {props.responsibilities.map((responsibility: string, index: number): JSX.Element => (
                    <section key={index} className={"w-full flex flex-row items-start gap-2"}>
                        <span className={"font-bold bg-linear-to-r bg-clip-text text-transparent from-green-400 to-blue-500 antialiased"}>•</span>
                        <p key={index} className={"text-gray-300 antialiased"}>
                            {responsibility}
                        </p>
                    </section>
                ))}
            </article>
        </section>
    );
}