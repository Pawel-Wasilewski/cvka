// "Completed" | "In Progress" | "On hold"
import type {ProjectInfoProps} from "../../interfaces/props/ProjectInfoProp.ts";

export const projects: ProjectInfoProps[] = [
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