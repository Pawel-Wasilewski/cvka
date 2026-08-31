import type {JSX} from "react";
import Header from "@/components/Header.tsx";
import MainContent from "@/components/MainContent.tsx";

function App(): JSX.Element {
    return (
        <section className={"w-screen min-h-9/10 flex lg:flex-row lg:justify-around flex-col sm:items-center md:items-center lg:items-start justify-start"}>
            <Header/>
            <MainContent/>
        </section>
    )
}

export default App
