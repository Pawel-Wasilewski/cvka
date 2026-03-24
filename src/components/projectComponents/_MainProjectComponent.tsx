import type {JSX} from "react";
import glassmorphism from "../../helperFunctions/glassmorphism.ts";
import ProjectCarosell from "./ProjectCarosell.tsx";

export default function _MainProjectComponent (): JSX.Element {
    return (<section className={glassmorphism + " margin-auto mt-10 p-7 rounded-lg w-2/3"} style={{minHeight: "520px"}}>
        <h2 className={"text-2xl text-gray-100 font-bold antialiased font-primary mb-4"}>Projects</h2>
        <ProjectCarosell/>
    </section>)
}