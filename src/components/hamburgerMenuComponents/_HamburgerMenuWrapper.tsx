import type {JSX, ReactNode} from "react";
import {House, IdCard, UserRound, X} from "lucide-react";
import UseHamburgerMenu from "../../hooks/UseHamburgerMenu.ts";
import {motion} from "motion/react";

interface HamburgerProps {
    children: ReactNode;
}

export default function _HamburgerMenuWrapper(prop: HamburgerProps): JSX.Element {
    const {isToggled, toggle} = UseHamburgerMenu();
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
                <section className={" flex h-full flex-col items-center justify-center"}>
                    <ul className={"flex flex-col gap-8 text-gray-100 text-2xl font-medium antialiased font-primary"}>
                        <li className={"hover:text-gray-300 transition duration-500 hover:scale-125 flex flex-row cursor-pointer"}>
                            <UserRound className={"mr-4"}/> Contact
                        </li>
                        <li className={"hover:text-gray-300 transition duration-500 hover:scale-125 flex flex-row cursor-pointer"}>
                            <House className={"mr-4"}/> Technologies
                        </li>
                        <li className={"hover:text-gray-300 transition duration-500 hover:scale-125 flex flex-row cursor-pointer"}>
                            <IdCard className={"mr-4"}/> Projects
                        </li>
                    </ul>
                </section>
            </motion.div>
        </>
    );
}