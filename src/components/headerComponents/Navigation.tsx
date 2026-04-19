import {type JSX} from "react";
import glassmorphism from "../../helperFunctions/glassmorphism.ts";
import { Menu } from "lucide-react";
import useHamburgerMenu from "../../hooks/UseHamburgerMenu.ts";
export default function Navigation(): JSX.Element {
    const {toggle} = useHamburgerMenu();
    return (<>
        <nav
            className={`${glassmorphism} shrink-0 flex h-11 w-11 items-center justify-center rounded-xl p-2 text-center text-gray-300 sm:h-12 sm:w-12`}
            onClick={toggle}>
            <Menu
                size={24}
                className={"cursor-pointer text-gray-100 transition duration-200 hover:scale-110"}/>
        </nav>
    </>)
}