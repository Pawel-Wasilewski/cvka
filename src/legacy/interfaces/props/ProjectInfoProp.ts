import type {ProjectStatus} from "../types/projectStatus.ts";

export interface ProjectInfoProps {
    projectStatus: ProjectStatus;
    title: string;
    imageUrl?: string | null;
    description: string;
    technologies: string[];
    projectUrl?: string | null;
}