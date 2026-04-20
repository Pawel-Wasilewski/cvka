import {type JSX} from "react";
import glassmorphism from "../../helperFunctions/glassmorphism.ts";
import {AtSign, Earth} from "lucide-react";
import useToastQueue from "../../hooks/UseToastQueue.ts";
import DownloadCVModal from "./criticalInfoComponents/DownloadCVModal.tsx";
import VisitGithubModal from "./criticalInfoComponents/VisitGithubModal.tsx";

export default function CriticalInfo(): JSX.Element {
    const addToast = useToastQueue((state => state.addToast));


    async function copyEmailToClipboard(): Promise<void> {
        console.log("Copy email to clipboard");
        await navigator.clipboard.writeText("kontakt@pawel-wasilewski.pl");
        addToast("success", "Email address copied to clipboard!", 5000);
    }

    return (<section
        id={"contact"}
        className={`${glassmorphism} mx-auto mt-28 flex w-[92%] max-w-5xl flex-col gap-6 rounded-2xl p-4 sm:mt-32 sm:p-6 md:mt-36 md:flex-row md:justify-between md:gap-10 md:p-8`}>
        <article className={"w-full md:w-3/5"}>
            <h2 className={"mb-4 font-primary text-xl font-bold text-gray-100 antialiased sm:text-2xl"}>Details</h2>
            <section
                className={"flex flex-col gap-3 font-primary text-base font-medium text-gray-100 antialiased sm:gap-4 sm:text-lg lg:flex-row"}>
                <a href={"mailto:wasilewski.pawel2007@gmail.com"}
                   onClick={copyEmailToClipboard}
                   className={"flex min-h-12 items-center rounded-2xl border border-white/20 bg-white/10 p-2 shadow-lg"}>
                    <div className={"rounded-xl border border-white/20 bg-white/10 p-2 shadow-lg"}>
                        <AtSign/>
                    </div>
                    <p className={"ml-2 inline-block break-all"}>kontakt@pawel-wasilewski.pl</p>
                </a>
                <div
                    className={"flex min-h-12 items-center rounded-2xl border border-white/20 bg-white/10 p-2 shadow-lg"}>
                    <div className={"rounded-xl border border-white/20 bg-white/10 p-2 shadow-lg"}>
                        <Earth/>
                    </div>
                    <p className={"ml-2 inline-block"}>Zabrze, Poland</p>
                </div>
            </section>
        </article>
        <article className={"w-full md:w-2/5"}>
            <DownloadCVModal/>
            <VisitGithubModal/>
        </article>
    </section>)
}