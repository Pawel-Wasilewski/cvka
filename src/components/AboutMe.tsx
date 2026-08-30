import type {JSX} from "react";

export default function AboutMe(): JSX.Element {
    return (
        <section id="about-me" className="p-4 text-white">
            <h2 className="text-4xl font-bold antialiased">Hello! I'm Paweł! 👋</h2>
            <h3 className={"font-bold antialiased mb-8"}>Zabrze, Silesia, Poland  🇵🇱</h3>
            <p className={"text-lg antialiased"}>
                Hello! I'm Paweł, a software developer with experience in building <span className={"font-bold bg-linear-to-r bg-clip-text text-transparent from-green-400 to-blue-500"}>full-stack applications</span>, and <span className={"font-bold bg-linear-to-r bg-clip-text text-transparent from-cyan-400 to-violet-500"}>verbose back-end services</span> mainly in <span className={"font-bold bg-linear-to-r bg-clip-text text-transparent from-cyan-400 to-blue-600"}>TypeScript</span> / <span className={"font-bold bg-linear-to-r bg-clip-text text-transparent from-yellow-400 to-amber-500"}>Javascript</span>.
                I enjoy learning new technologies and improving my skills.
            </p>
        </section>
    );
}