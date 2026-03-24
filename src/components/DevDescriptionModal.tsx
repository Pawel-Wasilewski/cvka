import type {JSX} from "react";
import glassmorphism from "../helperFunctions/glassmorphism.ts";

export default function DevDescriptionModal(): JSX.Element {
    return (<section className={glassmorphism + "margin-auto mt-10 p-8 rounded-lg w-2/3"}>
        <h2 className={"text-2xl text-gray-100 antialiased font-bold mb- font-primary"}>About Me</h2>
        <article className={"flex lg:flex-row md:flex-col sm:flex-col gap-4 text-gray-100 text-lg font-medium antialiased font-primary"}>
            <img src={"https://avatars.githubusercontent.com/u/105441583?v=4"} className={"w-64 h-64 float-left mr-3"} alt={"Profile picture of Paweł Wasilewski"}/>
            <p className={"text-justify"}>
                Hello! I'm Paweł, a passionate software developer with a love for creating innovative solutions. With a strong background in web development and a keen eye for design,
                I strive to build applications that are not only functional but also visually appealing. I enjoy working on projects that challenge me to learn new technologies and push the boundaries of what's possible.
                When I'm not coding, you can find me exploring the latest trends in tech or indulging in my love for gaming.
                <hr className={"lg:m-8 md:m-6 sm:m-2"}/>
                My journey in software development began several years ago, and since then, I've had the opportunity to work on a variety of projects, ranging from small personal websites to large-scale applications.
                I believe in continuous learning and am always eager to expand my skill set and take on new challenges. If you're interested in collaborating or just want to chat about technology, feel free to reach out!
            </p>

        </article>
    </section>)
}