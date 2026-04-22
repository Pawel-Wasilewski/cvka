import {type JSX, useState} from "react";
import type {ProjectInfoProps} from "../../interfaces/props/ProjectInfoProp.ts";
import MiniTechIconModal from "../helperComponents/MiniTechIconModal.tsx";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";

export default function ProjectCarousel(): JSX.Element {
    const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);

    // "Completed" | "In Progress" | "On hold"
    const projects: ProjectInfoProps[] = [
        {
            projectStatus: "Completed",
            title: "StoryTeller",
            imageUrl: "storyteller.jpg",
            description: "Llama 3.5B plugged into MAUI application and concludes interaction with user in creating a story based on user input. The story is then displayed in the app.",
            technologies: [
                "MAUI",
                "C#"
            ],
            projectUrl: "https://github.com/Pawel-Wasilewski/AIStoryTeller"
        },
        {
            projectStatus: "Completed",
            title: "RobotSteering",
            imageUrl: "robotsteering.jpg",
            description: "React Native app for controlling a robot. The app connects to the robot via WebSocket connection and sends commands by RaspberryPi based on user input. The app also receives feedback from the robot and displays it to the user.",
            technologies: [
                "ReactNative",
                "React",
                "TypeScript",
            ],
            projectUrl: "https://github.com/Pawel-Wasilewski/RobotSteering"
        },
        {
            projectStatus: "Completed",
            title: "QuizZS10_2025DniZawodowe",
            imageUrl: "quizzs10.png",
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
            title: "ZS10 Website",
            imageUrl: "zs10.png",
            description: "WordPress Site for my school co-created with others.",
            technologies: [
                "WordPress",
            ],
            projectUrl: "https://www.zs10.zabrze.pl/"
        }
    ]

    const currentProject: ProjectInfoProps = projects[currentProjectIndex];

    function handleLeftArrowClick() {
        setCurrentProjectIndex((prevIndex: number): number => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    }

    function handleRightArrowClick() {
        setCurrentProjectIndex((prevIndex: number): number => (prevIndex + 1) % projects.length);
    }

    return (<section className={"flex h-full w-full min-w-0 flex-col gap-4 overflow-hidden sm:gap-5 md:flex-row md:items-center md:justify-between"}>
        <div className={"order-2 flex shrink-0 items-center justify-center md:order-1 md:w-1/6"}>
            <ArrowLeft
                size={42}
                className={"text-gray-100 cursor-pointer antialiased hover:text-gray-300 transition-colors duration-500 shadow-black"}
                onClick={handleLeftArrowClick}
            />
        </div>

        <div className={"order-1 min-w-0 overflow-hidden md:order-2 cursor-pointer md:w-4/6"} onClick={() => window.open(currentProject.projectUrl!, "_blank")}>
            <AnimatePresence mode={"wait"} initial={false}>
                <motion.section
                    key={currentProjectIndex}
                    initial={{opacity: 0, x: 40}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -40}}
                    transition={{duration: 0.35, ease: "easeInOut"}}
                    className={"flex h-full w-full min-w-0 flex-col overflow-hidden rounded-xl border border-white/20 bg-white/5"}>
                {currentProject.imageUrl ? (
                    <img src={currentProject.imageUrl} alt={currentProject.title}
                         className={"h-44 w-full rounded-t-lg object-cover sm:h-52"}/>
                ) : (
                    <div className={"flex h-44 w-full items-center justify-center rounded-t-lg border-b border-white/20 bg-gradient-to-br from-white/5 to-white/10 text-sm text-gray-300 sm:h-52"}>
                        Preview coming soon
                    </div>
                )}
                <div className={"p-4 sm:p-5"}>
                    <h2 className={"mb-2 break-all text-lg font-bold text-gray-200 antialiased sm:text-xl"}>{currentProject.title}</h2>
                    <p className={"mb-4 break-all text-sm text-gray-300 sm:text-base"}>{currentProject.description}</p>
                    <div className={"flex flex-wrap gap-2"}>
                        {currentProject.technologies.map((tech, index) => {
                            return (
                                <MiniTechIconModal language={tech} key={index}/>
                            );
                        })}
                    </div>
                </div>
                </motion.section>
            </AnimatePresence>
        </div>

        <div className={"order-3 flex shrink-0 items-center justify-center md:w-1/6"}>
            <ArrowRight
                size={42}
                className={"text-gray-100 cursor-pointer antialiased hover:text-gray-300 transition-colors duration-500 shadow-black"}
                onClick={handleRightArrowClick}
            />
        </div>
    </section>)
}