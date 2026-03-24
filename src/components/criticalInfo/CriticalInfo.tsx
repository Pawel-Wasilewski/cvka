import type {JSX} from "react";
import glassmorphism from "../../helperFunctions/glassmorphism.ts";
import {SiGithub} from "@icons-pack/react-simple-icons";
import {AtSign, Earth, FileText} from "lucide-react";
import type ToastQueueProperties from "../../interfaces/props/ToastQueueProperties.ts";
import UseToastQueue from "../../hooks/UseToastQueue.tsx";

export default function CriticalInfo(): JSX.Element {
    const toastQueue: ToastQueueProperties = UseToastQueue();
    async function copyEmailToClipboard(): Promise<void> {
        console.log("Copy email to clipboard");
        await navigator.clipboard.writeText("wasilewski.pawel2007@gmail.com");
        toastQueue.addToast("success", "Email address copied to clipboard!", 5000);
    }

    return (<section
        className={glassmorphism + "margin-auto p-8 rounded-lg w-2/3 flex flex-row gap-10 justify-between flex-wrap mt-46"}>
        <article className={"lg:w-1/2 md:w-full"}>
            <h2 className={"text-2xl text-gray-100 font-bold antialiased font-primary mb-4"}>Details</h2>
            <section className={"flex lg:flex-row md:flex-row sm:flex-col gap-4 text-gray-100 text-lg font-medium cursor-pointer antialiased font-primary"}>
                <a  href={"mailto:wasilewski.pawel2007@gmail.com"}
                    onClick={copyEmailToClipboard}
                   className={"flex items-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-2"}>
                    <div className={"bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-2"}>
                        <AtSign />
                    </div>
                    <p className={"ml-2 inline-block"}>wasilewski.pawel2007@gmail.com</p>
                </a>
                <div
                    className={"flex items-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-2"}>
                    <div className={" bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-2"}>
                        <Earth />
                    </div>
                    <p className={"ml-2 inline-block"}>Zabrze, Poland</p>
                </div>
            </section>
        </article>
        <article className={"lg:w-1/3 md:w-full"}>
            <a href={"#"} className={"hover:underline text-gray-100"}>
                <section className={"flex flex-col gap-4 text-gray-100 text-lg font-medium antialiased font-primary"}>
                    <div
                        className={"bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-2 flex flex-row items-center"}>
                        <div
                            className={" bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-2"}>
                            <FileText />
                        </div>
                        <p className={"ml-2 inline-block"}>
                            Download CV
                        </p>
                    </div>
                </section>
            </a>
            <span className={"flex flex-row items-baseline gap-4 mt-4"}>
                <a href={"#"}
                   className={"bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-3 flex flex-row items-center"}>
                    <SiGithub className={"scale-150 text-gray-100"}/>
                </a>
            </span>
        </article>
    </section>)
}