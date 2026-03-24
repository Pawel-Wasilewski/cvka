import {type JSX, useState} from "react";
import type {ProjectInfoProps} from "../../interfaces/props/ProjectInfoProp.ts";
import MiniTechIconModal from "../helperComponents/MiniTechIconModal.tsx";
import {ArrowLeft, ArrowRight} from "lucide-react";

export default function ProjectCarosell(): JSX.Element {
    const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);

    // "Completed" | "In Progress" | "On hold"
    const projects: ProjectInfoProps[] = [
        {
            projectStatus: "Completed",
            title: "StoryTeller",
            imageUrl: null,
            description: "Llama 3.5B plugged into MAUI application and concludes interaction with user in creating a story based on user input. The story is then displayed in the app.",
            technologies: [
                "MAUI",
                "C#"
            ],
            projectUrl: null
        },
        {
            projectStatus: "Completed",
            title: "RobotSteering",
            imageUrl: null,
            description: "React Native app for controlling a robot. The app connects to the robot via WebSocket connection and sends commands by RaspberryPi based on user input. The app also receives feedback from the robot and displays it to the user.",
            technologies: [
                "ReactNative",
                "React",
                "TypeScript",
            ],
            projectUrl: null
        },
        {
            projectStatus: "Completed",
            title: "QuizZS10_2025DniZawodowe",
            imageUrl: "abc",
            description: "React based web app with purpose for internal contest in High School",
            technologies: [
                "React",
                "TailwindCSS",
                "TypeScript",
                "Vite"
            ],
            projectUrl: "https://pawel-wasilewski.github.io/QuizZS10_2025DniZawodowe/"
        },
        {
            projectStatus: "Completed",
            title: "DistTs",
            imageUrl: null,
            description: "TypeScript based Discord bot for managing a Discord server. The bot has various features such as moderation, music playback, and fun commands.",
            technologies: [
                "TypeScript"
            ],
            projectUrl: null
        },
        {
            projectStatus: "Completed",
            title: "GwentGameCalculator",
            imageUrl: null,
            description: "React Native app for calculating the score of a Gwent game. The app allows users to input the cards played by both players and calculates the score based on the rules of the game.",
            technologies: [
                "ReactNative",
                "React",
                "TypeScript",
            ],
            projectUrl: null
        }
    ]

    const currentProject: ProjectInfoProps = projects[currentProjectIndex];

    function handleLeftArrowClick() {
        setCurrentProjectIndex((prevIndex: number): number => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    }

    function handleRightArrowClick() {
        setCurrentProjectIndex((prevIndex: number): number => (prevIndex + 1) % projects.length);
    }

    return (<section className={"flex flex-row justify-between w-full h-full ml-4 mr-4"}>
        <div className={"w-1/5 h-full flex items-center justify-center"}>
            <ArrowLeft
                size={75}
                className={"text-gray-100 cursor-pointer antialiased hover:text-gray-300 transition-colors duration-500 shadow-black"}
                onClick={handleLeftArrowClick}
            />
        </div>
        <section className={"w-3/5 h-full flex flex-col"}>
            <img src={currentProject.imageUrl!} alt={currentProject.title} className={"w-full h-48 object-cover rounded-t-lg"}/>
            <div className={"p-4"}>
                <h2 className={"text-xl font-bold mb-2 text-gray-200 antialiased"}>{currentProject.title}</h2>
                <p className={"text-gray-300 mb-4"}>{currentProject.description}</p>
                <div className={"flex flex-wrap gap-2"}>
                    {currentProject.technologies.map((tech, index) => {
                        return (
                            <MiniTechIconModal language={tech} key={index}/>
                        );
                    })}
                </div>
            </div>
        </section>
        <div className={"w-1/5 h-full flex items-center justify-center"}>
            <ArrowRight
                size={75}
                className={"text-gray-100 cursor-pointer antialiased hover:text-gray-300 transition-colors duration-500 shadow-black"}
                onClick={handleRightArrowClick}
            />
        </div>
    </section>)
}