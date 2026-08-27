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
    const [currentIdx,             setCurrentIdx] = useState<number>(0);
    const [currentWorkplace, setCurrentWorkplace] = useState<WorkExperienceData>(workplaces[currentIdx]);
    const [currentProject,     setCurrentProject] = useState<ProjectStatusData>(projects[currentIdx]);

    function changeCurrentData(set: CurrentData): void {
        switch (set) {
            case CurrentData.WORK:
                setCurrentData(CurrentData.WORK);
                setCurrentIdx(0);
                break;
            case CurrentData.PROJECTS:
                setCurrentData(CurrentData.PROJECTS);
                setCurrentIdx(0);
                break;
            default:
                throw new Error("Invalid current data type");
        }
    }

    function moveLeft(): void {
        switch (currentData) {
            case CurrentData.WORK:
                if (currentIdx > 0) {
                    setCurrentIdx(currentIdx - 1);
                    setCurrentWorkplace(workplaces[currentIdx - 1]);
                } else {
                    setCurrentIdx(workplaces.length - 1);
                    setCurrentWorkplace(workplaces[workplaces.length - 1]);
                }
                break;
            case CurrentData.PROJECTS:
                if (currentIdx > 0) {
                    setCurrentIdx(currentIdx - 1);
                    setCurrentProject(projects[currentIdx - 1]);
                } else {
                    setCurrentIdx(projects.length - 1);
                    setCurrentProject(projects[projects.length - 1]);
                }
                break;
            default:
                throw new Error("Invalid current data type");
        }
    }

    function moveRight(): void {
        switch (currentData) {
            case CurrentData.WORK:
                if (currentIdx < workplaces.length - 1) {
                    setCurrentIdx(currentIdx + 1);
                    setCurrentWorkplace(workplaces[currentIdx + 1]);
                } else {
                    setCurrentIdx(0);
                    setCurrentWorkplace(workplaces[0]);
                }
                break;
            case CurrentData.PROJECTS:
                if (currentIdx < projects.length - 1) {
                    setCurrentIdx(currentIdx + 1);
                    setCurrentProject(projects[currentIdx + 1]);
                } else {
                    setCurrentIdx(0);
                    setCurrentProject(projects[0]);
                }
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
                            className={"hover:border-b-2 text-white font-bold py-2 px-4 cursor-pointer hover:scale-110 animation duration-100"}>
                            <h3 className={"text-2xl text-white duration-100 antialiased font-bold "}>
                                Work </h3>
                        </button>
                        <button
                            type={"button"}
                            onClick={(): void => changeCurrentData(CurrentData.PROJECTS)}
                            className={"hover:border-b-2 text-white font-bold py-2 px-4 cursor-pointer hover:scale-110 animation duration-100"}>
                            <h3 className={"text-2xl text-white duration-100 antialiased font-bold "}>
                                Projects </h3>
                        </button>
                    </div>

                    <h2 className={"text-2xl font-bold mb-4"}>
                        Work Experience </h2>

                    <JobField
                        company={currentWorkplace.company}
                        companyLocation={currentWorkplace.companyLocation}
                        companyLogo={currentWorkplace.companyLogo}
                        companySiteUrl={currentWorkplace.companySiteUrl}
                        position={currentWorkplace.position}
                        startDate={currentWorkplace.startDate}
                        endDate={currentWorkplace.endDate}
                        responsibilities={currentWorkplace.responsibilities} />

                    <section className={"w-full flex flex-row items-center justify-between mt-4"}>

                        <button type={"button"} onClick={moveLeft} disabled={currentIdx === 0}>
                            Previous </button>
                        <button type={"button"} onClick={moveRight} disabled={currentIdx === workplaces.length - 1}>
                            Next </button>

                    </section>
                </section>
            );
        case CurrentData.PROJECTS:
            return (
                <section className={"w-full flex flex-col items-center justify-center p-4"}>
                    <div className={"mb-4 flex justify-around gap-2"}>
                        <button
                            type={"button"}
                            onClick={(): void => changeCurrentData(CurrentData.WORK)}
                            className={"hover:border-b-2 text-white font-bold py-2 px-4 cursor-pointer hover:scale-110 animation duration-100"}>
                            <h3 className={"text-2xl text-white duration-100 antialiased font-bold "}>
                                Work </h3>
                        </button>
                        <button
                            type={"button"}
                            onClick={(): void => changeCurrentData(CurrentData.PROJECTS)}
                            className={"hover:border-b-2 text-white font-bold py-2 px-4 cursor-pointer hover:scale-110 animation duration-100"}>
                            <h3 className={"text-2xl text-white duration-100 antialiased font-bold "}>
                                Projects </h3>
                        </button>
                    </div>
                    <h2
                        className={"text-2xl font-bold mb-4"}>
                        Projects</h2>

                    <ProjectField
                        projectName={currentProject.projectName}
                        projectRepositoryURL={currentProject.projectRepositoryURL}
                        projectDescription={currentProject.projectDescription}
                        projectTechnologies={currentProject.projectTechnologies}
                        projectStatus={currentProject.projectStatus}/>

                    <section className={"w-full flex flex-row items-center justify-between mt-4"}>

                        <button type={"button"} onClick={moveLeft} disabled={currentIdx === 0}>
                            Previous </button>
                        <button type={"button"} onClick={moveRight} disabled={currentIdx === projects.length - 1}>
                            Next </button>

                    </section>
                </section>
            );
        default:
            return (
                <p> How you got this? write to contact mail provided</p>
            );
    }
}