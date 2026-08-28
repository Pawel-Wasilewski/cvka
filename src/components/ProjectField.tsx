import type ProjectStatusData from "@/assets/data/projectStatusData.ts";
import type {JSX} from "react";
import ProgressState from "@/assets/data/enums/progressState.ts";

export default function ProjectField(props: ProjectStatusData): JSX.Element {
    const statusLabel: JSX.Element = ((): JSX.Element => {
        switch (props.projectStatus) {
            case ProgressState.COMPLETED:
                return <h4 className={"text-green-500"}>Done</h4>;
            case ProgressState.IN_PROGRESS:
                return <h4 className={"text-yellow-500"}>In progress</h4>;
            default:
                return <h4 className={"text-gray-500"}>Unknown</h4>;
        }
    })();

    return (
        <section className={"w-full min-h-48 h-fit flex flex-row items-center justify-start rounded-2xl"}>
            <div className={"w-2 self-stretch bg-linear-to-b from-green-400 to-blue-500"} />

            <article className="w-full self-stretch flex flex-col items-start backdrop-blur-2xl justify-center gap-2 p-4">
                <section className={"w-full h-1/4 flex flex-row items-center justify-between"}>
                    <a href={props.projectRepositoryURL!} target="_blank" rel="noopener noreferrer">
                        <h3 className={"text-lg font-bold text-white antialiased"}>
                            Project: {props.projectName}
                        </h3>
                    </a>
                    {statusLabel}
                </section>
                <section className={"w-full h-3/4 flex flex-col items-start justify-start gap-2"}>
                    <p className={"text-gray-300 antialiased text-justify h-3/4"}>
                        {props.projectDescription}
                    </p>

                    <div className={"w-full flex flex-row items-center justify-start gap-2 h-1/4"}>
                        <h4 className={"text-gray-300 antialiased"}>Technologies used in this project:</h4>
                        {props.projectTechnologies.map((technology: string, index: number): JSX.Element => (
                            <span key={index} className={"text-gray-300 antialiased"}>
                            {technology}
                        </span>
                        ))}
                    </div>
                </section>
            </article>
        </section>
    );
}