import {type JSX} from "react";
import _MainHeaderComponent from "./components/headerComponents/_MainHeaderComponent.tsx";
import HomeMainComponent from "./components/HomeMainComponent.tsx";
import _HamburgerMenuWrapper from "./components/hamburgerMenuComponents/_HamburgerMenuWrapper.tsx";
import _ToastWrapper from "./components/toasts/_ToastWrappper.tsx";

function App(): JSX.Element {
    return (
        <_ToastWrapper>
            <_HamburgerMenuWrapper>
                <_MainHeaderComponent/>
                <HomeMainComponent/>
            </_HamburgerMenuWrapper>
        </_ToastWrapper>
    )
}

export default App
