import type {JSX} from "react";
import type KnownTechnologyModalProps from "../../interfaces/props/KnownTechnologyProp.ts";

export default function KnownTechnologyModal(prop: KnownTechnologyModalProps): JSX.Element {
    return (<div className={"flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-2 w-27"}>
        <div className={"bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-4"}>
            {prop.technologyIcon}
        </div>
        <p className={"inline-block p-2 text-gray-100 antialiased"}>{prop.technologyName}</p>
    </div>)
}