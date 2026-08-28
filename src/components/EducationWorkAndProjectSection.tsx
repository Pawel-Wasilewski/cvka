import {type JSX, useState} from "react";
import CurrentData from "@/assets/data/enums/currentData.ts";
import workExperienceData from "./../../public/jsons/workExperience.json";
import projectsDescriptions from "./../../public/jsons/projectDescriptions.json";
import type WorkExperienceData from "@/assets/data/workExperienceData.ts";
import type ProjectStatusData from "@/assets/data/projectStatusData.ts";
import JobField from "@/components/JobField.tsx";
import ProjectField from "@/components/ProjectField.tsx";
const workplaces = workExperienceData as WorkExperienceData[];
const projects = projectsDescriptions as unknown as ProjectStatusData[];

//TODO when in Uni add education
export default function EducationWorkAndProjectSection(): JSX.Element {
    const [currentData,           setCurrentData] = useState<CurrentData>(CurrentData.WORK);

    function changeCurrentData(set: CurrentData): void {
        switch (set) {
            case CurrentData.WORK:
                setCurrentData(CurrentData.WORK);
                break;
            case CurrentData.PROJECTS:
                setCurrentData(CurrentData.PROJECTS);
                break;
            default:
                throw new Error("Invalid current data type");
        }
    }

    switch (currentData) {
        case CurrentData.WORK:
            return (
                <section className={"w-full flex flex-col justify-center p-4"}>
                    <div className={"mb-4 flex justify-around gap-2"}>
                        <button
                            type={"button"}
                            onClick={(): void => changeCurrentData(CurrentData.WORK)}
                            className={"hover:border-b-2 text-white font-bold py-2 px-4 cursor-pointer transition-transform duration-150 transform-gpu"}>
                            <h3 className={"text-2xl text-white antialiased font-bold"}>
                                ‣ <span className={"pl-4"}>Work</span>
                            </h3>
                        </button>
                        <button
                            type={"button"}
                            onClick={(): void => changeCurrentData(CurrentData.PROJECTS)}
                            className={"border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white text-white font-bold py-2 px-4 cursor-pointer transition-transform duration-150 transform-gpu"}>
                            <h3 className={"text-2xl text-white antialiased font-bold "}>
                                ‣ <span className={"pl-4"}> Projects </span></h3>
                        </button>
                    </div>

                    <section className={"w-full flex flex-col justify-center gap-8"}>
                        {workplaces.map((currentWorkplace: WorkExperienceData, index: number): JSX.Element => (
                            <JobField
                                key={index}
                                {...currentWorkplace}/>
                        ))}
                    </section>
                </section>
            );
        case CurrentData.PROJECTS:
            return (
                <section className={"w-full flex flex-col justify-center p-4"}>
                    <div className={"mb-4 flex justify-around gap-2"}>
                        <button
                            type={"button"}
                            onClick={(): void => changeCurrentData(CurrentData.WORK)}
                            className={"hover:border-b-2 text-white font-bold py-2 px-4 cursor-pointer transition-transform duration-150 transform-gpu"}>
                            <h3 className={"text-2xl text-white antialiased font-bold"}>
                                ‣ <span className={"pl-4"}>Work</span>
                            </h3>
                        </button>
                        <button
                            type={"button"}
                            onClick={(): void => changeCurrentData(CurrentData.PROJECTS)}
                            className={"border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white text-white font-bold py-2 px-4 cursor-pointer transition-transform duration-150 transform-gpu"}>
                            <h3 className={"text-2xl text-white antialiased font-bold "}>
                                ‣ <span className={"pl-4"}> Projects </span></h3>
                        </button>
                    </div>
                    <section className={"w-full flex flex-col justify-center gap-8"}>
                        {projects.map((currentProject: ProjectStatusData, index: number): JSX.Element => (
                            <ProjectField
                                key={index}
                                projectName={currentProject.projectName}
                                projectDescription={currentProject.projectDescription}
                                projectTechnologies={currentProject.projectTechnologies}
                                projectStatus={currentProject.projectStatus}
                                projectRepositoryURL={currentProject.projectRepositoryURL}/>
                        ))}
                    </section>
                </section>
            );
        default:
            return (
                <p> How you got this? write to contact mail provided</p>
            );
    }
}