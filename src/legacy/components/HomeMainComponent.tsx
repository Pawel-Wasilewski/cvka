import type {JSX} from "react";
import DevDescriptionModal from "./DevDescriptionModal.tsx";
import CriticalInfo from "./criticalInfo/CriticalInfo.tsx";
import _MainTechnologiesComponent from "./technologiesComponents/_MainTechnologiesComponent.tsx";
import _MainExperienceComponent from "./experienceComponents/_MainExperienceComponent.tsx";
import _MainProjectComponent from "./projectComponents/_MainProjectComponent.tsx";

export default function HomeMainComponent(): JSX.Element {
    return (<>
        <CriticalInfo/>
        <DevDescriptionModal/>
        <_MainTechnologiesComponent/>
        <_MainExperienceComponent/>
        <_MainProjectComponent/>
    </>)
}