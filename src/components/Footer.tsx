import type {JSX} from "react";

export default function Footer(): JSX.Element {
    return (
        <footer className={"w-full h-16 text-gray-300 antialiased flex justify-start items-center ml-3"}>
            <p className={"text-sm"}>© {new Date().getFullYear()} Paweł Wasilewski, All rights reserved.</p>
        </footer>
    );
}