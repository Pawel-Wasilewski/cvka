import type {JSX} from "react";
import AboutMe from "@/components/AboutMe.tsx";
import TechnologiesCarousel from "@/components/TechnologiesCarousel.tsx";
import EducationWorkAndProjectSection from "@/components/EducationWorkAndProjectSection.tsx";

export default function MainContent(): JSX.Element {


    return (
        <main className={"min-w-0 lg:max-w-3/4 sm:max-w-full md:max-w-full min-h-screen flex flex-col text-white overflow-hidden"}>
            <AboutMe />
            <TechnologiesCarousel />
            <EducationWorkAndProjectSection />
        </main>
    );
}