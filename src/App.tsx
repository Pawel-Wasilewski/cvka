import type {JSX} from "react";
import _MainHeaderComponent from "@/legacy/components/headerComponents/_MainHeaderComponent.tsx";
import HomeMainComponent from "@/legacy/components/HomeMainComponent.tsx";
import _HamburgerMenuWrapper from "@/legacy/components/hamburgerMenuComponents/_HamburgerMenuWrapper.tsx";
import _ToastWrapper from "@/legacy/components/toasts/_ToastWrappper.tsx";
import _HamburgerPDFToDownloadWrapper from "@/legacy/components/HamburgerPDFToDownloadMenuComponents/_HamburgerPDFToDownloadWrapper.tsx";
import ToastWrapper from "@/components/wrappers/toastWrapper/ToastWrapper.tsx";
import Header from "@/components/Header.tsx";
import MainContent from "@/components/MainContent.tsx";

function App(): JSX.Element {
    const ifLegacy: boolean = false;

    if (ifLegacy) {
        return (
            <_ToastWrapper>
                <_HamburgerPDFToDownloadWrapper>
                    <_HamburgerMenuWrapper>
                        <_MainHeaderComponent/>
                        <HomeMainComponent/>
                    </_HamburgerMenuWrapper>
                </_HamburgerPDFToDownloadWrapper>
            </_ToastWrapper>
        )
    }
    else {
        return (
            <section className={"w-screen min-h-screen flex lg:flex-row lg:justify-around flex-col sm:items-center md:items-center lg:items-start justify-start"}>
                <Header/>
                <MainContent/>
            </section>
        )
    }
}

export default App
