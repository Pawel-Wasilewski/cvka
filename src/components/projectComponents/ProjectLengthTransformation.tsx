import type {JSX} from "react";
import type {ProjectInfoProps} from "../../interfaces/props/ProjectInfoProp.ts";
import glassmorphism from "../../helperFunctions/glassmorphism.ts";

export default function AboutProjectsModal(prop: ProjectInfoProps): JSX.Element {
    return (<section className={glassmorphism + "w-full ml-4 mr-4"}>
        <img src={prop.imageUrl ?? "#"} alt={prop.title} className={"w-full h-48 object-cover rounded-t-lg"}/>
        <div className={"p-4"}>
            <h2 className={"text-xl font-bold mb-2"}>{prop.title}</h2>
            <p className={"text-gray-300 mb-4"}>{prop.description}</p>
            <div className={"flex flex-wrap gap-2"}>
                {prop.technologies.map((tech, index) => (
                    <span key={index} className={"bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-sm"}>
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </section>)
}