import type {JSX, ReactNode} from "react";
import {FileText, X} from "lucide-react";
import {motion} from "motion/react";
import UsePDFMenu from "../../hooks/UsePDFMenu.ts";

interface HamburgerProps {
    children: ReactNode;
}

export default function _HamburgerPDFToDownloadWrapper(prop: HamburgerProps): JSX.Element {
    const {isToggled, toggle} = UsePDFMenu();
    return (
        <>
            {prop.children}
            <motion.div
                initial={{x: "100%"}}
                animate={{x: isToggled ? "0%" : "100%"}}
                transition={{duration: 0.3, ease: "easeInOut"}}
                className={"fixed top-0 right-0 w-screen h-screen bg-gray-800 rounded-lg shadow-lg p-4 z-30 flex flex-col"}>
                <motion.div
                    className={"flex flex-row justify-end"}>
                    <X onClick={toggle}
                       className={"text-gray-100 hover:rotate-45 cursor-pointer hover:scale-125 transition duration-200"}/>
                </motion.div>
                <section className={"text-2xl antialiased flex h-full flex-col items-center justify-center"}>
                    <a href={"pawel_wasilewski_cv_en.pdf"} target={"_blank"}
                       className={"flex flex-row items-center justify-between m-4 text-gray-100 hover:text-gray-200 hover:scale-125 transform duration-200"}><FileText
                        className={"text-2xl mr-4"}/> Download English Version </a>
                    <a href={"pawel_wasilewski_cv_pl.pdf"} target={"_blank"}
                       className={"flex flex-row items-center justify-center m-4 text-gray-100 hover:text-gray-200 hover:scale-125 transform duration-200"}><FileText
                        className={"text-2xl mr-4"}/> Download Polish Version </a>
                </section>
            </motion.div>
        </>
    );
}