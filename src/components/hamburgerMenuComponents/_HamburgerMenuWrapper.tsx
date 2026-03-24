import type {JSX, ReactNode} from "react";
import {X} from "lucide-react";
interface HamburgerProps {
    isOpen: boolean;
    children: ReactNode;
}

export default function _HamburgerMenuWrapper(prop: HamburgerProps): JSX.Element {
    function handleMenuClose(): void {
        prop.isOpen == !prop.isOpen;
    }
    return (
        <>
            {prop.children}
            {prop.isOpen && (
                <section className={"fixed top-0 right-0 w-screen h-screen bg-gray-800 rounded-lg shadow-lg p-4 z-30 transition-opacity duration-500 opacity-100 flex flex-col items-center justify-center"}>
                    <X onClick={}/>
                    <ul className={"flex flex-col gap-4 text-gray-100 text-lg font-medium antialiased font-primary"}>
                        <li className={"hover:text-gray-300 transition-colors duration-500 cursor-pointer"}>Home</li>
                        <li className={"hover:text-gray-300 transition-colors duration-500 cursor-pointer"}>Projects</li>
                        <li className={"hover:text-gray-300 transition-colors duration-500 cursor-pointer"}>Contact</li>
                    </ul>
                </section>
            )}
        </>
    );
}