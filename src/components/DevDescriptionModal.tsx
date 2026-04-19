import type {JSX} from "react";
import glassmorphism from "../helperFunctions/glassmorphism.ts";

export default function DevDescriptionModal(): JSX.Element {
    return (<section className={`${glassmorphism} mx-auto mt-6 w-[92%] max-w-5xl rounded-2xl p-4 sm:mt-8 sm:p-6 md:p-8`}>
        <h2 className={"mb-3 font-primary text-xl font-bold text-gray-100 antialiased sm:mb-4 sm:text-2xl"}>About Me</h2>
        <article className={"flex flex-col gap-4 font-primary text-base font-medium text-gray-100 antialiased sm:text-lg"}>
            <p className={"break-words text-justify"}>
                Hello! I'm Paweł, a software developer with a love for creating innovative solutions. With a strong background in web development,
                I strive to build applications that are functional. I enjoy working on projects that challenge me to learn new technologies and push the boundaries of what's possible.
                When I'm not coding.
                <hr className={"my-4 border-white/20 sm:my-6"}/>
                My journey in software development began several years ago, and since then, I've had the opportunity to work on a variety of projects, ranging from small personal websites to large-scale applications.
                I believe in continuous learning and am always eager to expand my skill set and take on new challenges!
            </p>
        </article>
    </section>)
}