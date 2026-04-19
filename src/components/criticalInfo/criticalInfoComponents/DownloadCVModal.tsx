import {ChevronRight, FileText} from "lucide-react";
import { motion } from "motion/react";
import {type JSX} from "react";
import UsePDFMenu from "../../../hooks/UsePDFMenu.ts";

export default function DownloadCVModal(): JSX.Element {
    const {toggle} = UsePDFMenu();

    return(<section className={"flex flex-col gap-4 text-gray-100 text-lg font-medium antialiased font-primary"}>
        <div
            className={"bg-white/10 backdrop-blur-sm rounded-2xl border w-full border-white/20 shadow-lg p-2 flex flex-row items-center justify-between"}>
            <div className={"flex flex-row items-center w-4/5"}>
                <div
                    className={" bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-2"}>
                    <FileText/>
                </div>
                <p className={"ml-2 inline-block"}>
                    Download CV
                </p>
            </div>
            <motion.div
                whileHover={{scale: 1.3}}
                onClick={toggle}
                className={"p-2 rounded-full cursor-pointer"}>
                <ChevronRight className={"text-gray-100"}/>
            </motion.div>
        </div>
    </section>)
}