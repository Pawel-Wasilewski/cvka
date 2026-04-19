import type {JSX} from "react";
import type KnownTechnologyModalProps from "../../interfaces/props/KnownTechnologyProp.ts";

export default function KnownTechnologyModal(prop: KnownTechnologyModalProps): JSX.Element {
    return (<div
        className={"flex min-h-28 w-[46%] flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg sm:w-[31%] md:w-[23%] lg:w-[18%]"}>
        <div className={"rounded-2xl border border-white/20 bg-white/10 p-4 shadow-md sm:p-5"}>
            {prop.technologyIcon}
        </div>
        <p className={"mt-3 text-center text-sm text-gray-100 antialiased sm:text-base"}>{prop.technologyName}</p>
    </div>)
}