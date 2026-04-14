import glassmorphism from "../../helperFunctions/glassmorphism.ts";
import type {JSX} from "react";
import Navigation from "./Navigation.tsx";



export default function _MainHeaderComponent(): JSX.Element {
    return (
        <header className={glassmorphism + " w-2/3 mx-auto mt-15 flex items-center justify-around py-6 px-8 fixed z-20"}>
            <h1 className={"text-3xl text-gray-100 font-bold antialiased font-primary text-shadow-sm"}>
                Paweł Wasilewski
            </h1>
            <Navigation/>
        </header>
    )
}