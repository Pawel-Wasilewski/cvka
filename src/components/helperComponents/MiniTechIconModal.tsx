import {type JSX} from "react";
import glassmorphism from "../../helperFunctions/glassmorphism.ts";
import GetSVGIconFromReactIcons from "./GetSVGIconFromReactIcons.tsx";
import type MiniTechModalProps from "../../interfaces/props/MiniTechModalProp.ts";


export default function MiniTechIconModal(prop: MiniTechModalProps): JSX.Element {
    return (<div className={`${glassmorphism} h-14 w-14 rounded-full`}>
        <GetSVGIconFromReactIcons language={prop.language} className={"w-full h-full p-3 text-gray-100"}/>
    </div>)
}