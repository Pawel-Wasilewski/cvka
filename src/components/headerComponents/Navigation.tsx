import {type JSX} from "react";
import glassmorphism from "../../helperFunctions/glassmorphism.ts";
import { Menu } from "lucide-react";

interface NavigationProps {
    menuOpen: () => void;
}

export default function Navigation(prop: NavigationProps): JSX.Element {

    return (<>
        <nav
            className={glassmorphism + "p-2 rounded-lg w-12 h-12 flex items-center justify-center text-center cursor-pointer text-gray-300"}>
            <Menu
                className={"text-gray-100 text-3xl"}
                onClick={prop.menuOpen}/>
        </nav>
    </>)
}