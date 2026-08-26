import type {JSX} from "react";
import {getUserBrowserWidth} from "@/assets/helper_functions/userBrowser.ts";
import ScreenSize from "@/assets/data/screenSize.ts";
import AboutMe from "@/components/AboutMe.tsx";

export default function MainContent(): JSX.Element {
    if (getUserBrowserWidth().valueOf() === ScreenSize.DESKTOP.valueOf()) {
        return (
            <main className="min-w-3/4 min-h-screen flex flex-col text-white">
                <AboutMe/>
            </main>
        );
    } else {
        return (
            <main className="flex flex-col items-center p-4 bg-gray-100 text-gray-800">
                <h2 className="text-2xl font-bold mb-4">My Application</h2>
                <p>Welcome to my application!</p>
            </main>
        );
    }
}