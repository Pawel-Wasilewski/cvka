import type {JSX} from "react";
import {SiGithub} from "@icons-pack/react-simple-icons";
import {ChevronRight} from "lucide-react";
import {motion} from "motion/react";


export default function VisitGithubModal(): JSX.Element {
    return (
        <section className={"flex flex-col gap-4 mt-2 text-gray-100 text-lg font-medium antialiased font-primary"}>
            <div
                className={"bg-white/10 backdrop-blur-sm rounded-2xl border w-full border-white/20 shadow-lg p-2 flex flex-row items-center justify-between cursor-pointer"}
                onClick={() => window.open("https://github.com/Pawel-Wasilewski", "_blank")}>
                <div className={"flex flex-row items-center w-4/5"}>
                    <div
                        className={" bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-2"}>
                        <SiGithub className={"text-gray-100"}/>
                    </div>
                    <p className={"ml-2 inline-block"}>
                        Visit my Github Profile
                    </p>
                </div>
                <motion.div
                    whileHover={{scale: 1.3}}
                    className={"p-2 rounded-full"}>
                    <ChevronRight className={"text-gray-100"}/>
                </motion.div>
            </div>
        </section>
    )
}