import {type JSX} from "react";
import glassmorphism from "../../helperFunctions/glassmorphism.ts";
import { Menu } from "lucide-react";
import UseHamburgerMenu from "../../hooks/UseHamburgerMenu.ts";
export default function Navigation(): JSX.Element {
    const {toggle} = UseHamburgerMenu();
    return (<>
        <nav
            className={glassmorphism + "p-2 rounded-lg w-12 h-12 flex items-center justify-center text-center text-gray-300"}
            onClick={toggle}>
            <Menu
                className={"text-gray-100 text-3xl hover:scale-125 transition duration-200 cursor-pointer"}/>
        </nav>
    </>)
}