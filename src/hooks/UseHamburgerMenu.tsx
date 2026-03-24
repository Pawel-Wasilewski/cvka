import {useState} from "react";
import type HamburgerMenuHookProperties from "../interfaces/props/HamburgerMenuHookProperties.ts";

export default function UseHamburgerMenu(): HamburgerMenuHookProperties {
    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu(): void {
        setIsOpen(!isOpen);
    }
    return {
        isOpen: isOpen,
        toggle: toggleMenu
    };
}