import type {JSX, ReactNode} from "react";
import {X} from "lucide-react";
import UseHamburgerMenu from "../../hooks/UseHamburgerMenu.ts";
import { motion } from "motion/react";
interface HamburgerProps {
    children: ReactNode;
}

export default function _HamburgerMenuWrapper(prop: HamburgerProps): JSX.Element {
    const {isToggled, toggle} = UseHamburgerMenu();
    return (
        <>
            {prop.children}
            {isToggled ? (
                <motion.div
                    className={"fixed top-0 right-0 w-screen h-screen bg-gray-800 rounded-lg shadow-lg p-4 z-30 transition-opacity duration-500 opacity-100 flex flex-col"}>
                    <motion.div
                        className={"flex flex-row justify-end"}>
                        <X onClick={toggle}
                           className={"text-gray-100 cursor-pointer hover:scale-125 transition duration-200"}/>
                    </motion.div>
                    <section className={" flex h-full flex-col items-center justify-center"}>
                        <ul className={"flex flex-col gap-4 text-gray-100 text-lg font-medium antialiased font-primary"}>
                            <li className={"hover:text-gray-300 transition-colors duration-500 cursor-pointer"}>Home</li>
                            <li className={"hover:text-gray-300 transition-colors duration-500 cursor-pointer"}>Projects</li>
                            <li className={"hover:text-gray-300 transition-colors duration-500 cursor-pointer"}>Contact</li>
                        </ul>
                    </section>
                </motion.div>
            ) : null}
        </>
    );
}