import type ProgressState from "@/assets/data/enums/progressState.ts";

export default interface ProjectStatusData {
    projectName:          string
    projectRepositoryURL: string | null
    projectDescription:   string
    projectTechnologies:  string[]
    projectStatus:        ProgressState
}
