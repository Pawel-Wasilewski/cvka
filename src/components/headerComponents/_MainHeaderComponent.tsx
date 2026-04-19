import glassmorphism from "../../helperFunctions/glassmorphism.ts";
import type {JSX} from "react";
import Navigation from "./Navigation.tsx";



export default function _MainHeaderComponent(): JSX.Element {
    return (
        <header
            className={`${glassmorphism} fixed left-1/2 top-4 z-20 flex w-[92%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-2xl px-4 py-3 sm:top-5 sm:px-6 sm:py-4`}>
            <h1 className={"min-w-0 flex-1 truncate pr-3 font-primary text-base font-bold text-gray-100 antialiased sm:text-2xl md:text-3xl"}>
                Paweł Wasilewski
            </h1>
            <Navigation/>
        </header>
    )
}