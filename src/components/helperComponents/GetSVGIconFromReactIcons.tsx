import type {JSX, ComponentType} from "react";
import {
    SiCplusplus,
    SiDotnet,
    SiJavascript, SiMongodb, SiMongoose,
    SiMysql, SiPrisma,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVite,
    SiSharp
} from "@icons-pack/react-simple-icons";
import type SVGIconSelectorProps from "../../interfaces/props/SVGIconSelectorProps.ts";

type IconComponent = ComponentType<{ className: string }>;

const ICON_MAP: Record<string, IconComponent> = {
    MAUI: SiDotnet,
    Python: SiJavascript,
    "C++": SiCplusplus,
    "C#": SiSharp,
    Javascript: SiJavascript,
    TypeScript: SiTypescript,
    MySQL: SiMysql,
    Prisma: SiPrisma,
    MongoDB: SiMongodb,
    Mongoose: SiMongoose,
    React: SiReact,
    ReactNative: SiReact,
    TailwindCSS: SiTailwindcss,
    Vite: SiVite,
};

export default function GetSVGIconFromReactIcons(props: SVGIconSelectorProps): JSX.Element {
    const Icon: IconComponent = ICON_MAP[props.language];
    return <Icon className={props.className ?? ""}/>;
}