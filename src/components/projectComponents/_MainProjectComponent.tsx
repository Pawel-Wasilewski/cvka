import type {JSX} from "react";
import glassmorphism from "../../helperFunctions/glassmorphism.ts";
import ProjectCarosell from "./ProjectCarosell.tsx";

export default function _MainProjectComponent (): JSX.Element {
    return (<section
        id={"projects"}
        className={`${glassmorphism} mx-auto mb-10 mt-6 w-[92%] max-w-5xl overflow-hidden rounded-2xl p-4 sm:mb-12 sm:mt-8 sm:p-6 md:p-7`}
        style={{minHeight: "520px"}}>
        <h2 className={"mb-4 font-primary text-xl font-bold text-gray-100 antialiased sm:text-2xl"}>Projects</h2>
        <ProjectCarosell/>
    </section>)
}