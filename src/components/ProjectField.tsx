import type ProjectStatusData from "@/assets/data/projectStatusData.ts";
import type {JSX} from "react";
import ProgressState from "@/assets/data/enums/progressState.ts";

export default function ProjectField(props: ProjectStatusData): JSX.Element {
    const statusLabel: JSX.Element = ((): JSX.Element => {
        switch (props.projectStatus) {
            case ProgressState.COMPLETED:
                return <span className={"text-green-500"}>Done</span>;
            case ProgressState.IN_PROGRESS:
                return <span className={"text-yellow-500"}>In progress</span>;
            default:
                return <span className={"text-gray-500"}>Unknown</span>;
        }
    })();

    return (
        <section className={"w-full h-full flex flex-col items-center justify-center"}>
            <section className={"w-full flex flex-row items-center justify-start"}>
                <a href={props.projectRepositoryURL!} target="_blank" rel="noopener noreferrer">
                    <h3 className={"text-lg font-bold text-white antialiased ml-4"}>
                        Project: {props.projectName}
                    </h3>
                </a>
                {statusLabel}
            </section>
            <p className={"text-gray-300 antialiased text-justify"}>
                {props.projectDescription}
            </p>
            <section className={"w-full flex flex-row items-center justify-start gap-2"}>
                {props.projectTechnologies.map((technology: string, index: number): JSX.Element => (
                    <span key={index} className={"text-gray-300 antialiased"}>
                        {technology}
                    </span>
                ))}
            </section>
        </section>
    )
}