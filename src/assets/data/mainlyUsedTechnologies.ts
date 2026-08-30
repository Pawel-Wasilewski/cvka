import type KnownTechnologyModalProps from "@/legacy/interfaces/props/KnownTechnologyProp.ts";
import {createElement, type ComponentType, type JSX} from "react";
import {
    SiAndroidstudio,
    SiAngular,
    SiDocker,
    SiDotnet,
    SiExpress,
    SiJavascript,
    SiMongodb,
    SiMongoose,
    SiMysql,
    SiNodedotjs,
    SiPrisma,
    SiPython,
    SiReact,
    SiTypescript
} from "@icons-pack/react-simple-icons";

const icon = (
    Icon: ComponentType<{className?: string}>,
    className: string
): JSX.Element => createElement(Icon, {className});

export const mainlyUsedTechnologies: KnownTechnologyModalProps[] = [
    {
        technologyName: "TypeScript",
        technologyIcon: icon(SiTypescript, "font-bold text-white scale-175")},
    {
        technologyName: "NodeJS",
        technologyIcon: icon(SiNodedotjs, "font-bold text-white scale-200")},
    {
        technologyName: "React",
        technologyIcon: icon(SiReact, "font-bold text-white scale-200")},
    {
        technologyName: "Express",
        technologyIcon: icon(SiExpress, "font-bold text-white scale-200")},
    {
        technologyName: "ReactNative",
        technologyIcon: icon(SiReact, "font-bold text-white scale-200")},
    {
        technologyName: "MySQL",
        technologyIcon: icon(SiMysql, "font-bold text-white scale-200")},
    {
        technologyName: "Prisma",
        technologyIcon: icon(SiPrisma, "font-bold text-white scale-200")},
    {
        technologyName: "MongoDB",
        technologyIcon: icon(SiMongodb, "font-bold text-white scale-200")},
    {
        technologyName: "Mongoose",
        technologyIcon: icon(SiMongoose, "font-bold text-white scale-200")},
    {
        technologyName: "Docker",
        technologyIcon: icon(SiDocker, "font-bold text-white scale-200")},
];

export const alsoKnownTechnologies: KnownTechnologyModalProps[] = [
    {
        technologyName: "JavaScript",
        technologyIcon: icon(SiJavascript, "font-bold text-white scale-175")},
    {
        technologyName: "Angular",
        technologyIcon: icon(SiAngular, "font-bold text-white scale-200")},
    {
        technologyName: "Python",
        technologyIcon: icon(SiPython, "font-bold text-white scale-200")},
    {
        technologyName: "MAUI",
        technologyIcon: icon(SiDotnet, "font-bold text-white scale-200")},
    {
        technologyName: "WPF",
        technologyIcon: icon(SiDotnet, "font-bold text-white scale-200")},
    {
        technologyName: "JavaAndroid",
        technologyIcon: icon(SiAndroidstudio, "font-bold text-white scale-200")},
];