import {type JSX, useState} from "react";
import _MainHeaderComponent from "./components/headerComponents/_MainHeaderComponent.tsx";
import HomeMainComponent from "./components/HomeMainComponent.tsx";
import _HamburgerMenuWrapper from "./components/hamburgerMenuComponents/_HamburgerMenuWrapper.tsx";
import _ToastWrapper from "./components/toasts/_ToastWrappper.tsx";
import UseToastQueue from "./hooks/UseToastQueue.tsx";
import type ToastQueueProperties from "./interfaces/props/ToastQueueProperties.ts";

function App(): JSX.Element {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toastQueue: ToastQueueProperties = UseToastQueue();
    return (
        <_ToastWrapper toasts={toastQueue.toasts}>
            <_HamburgerMenuWrapper isOpen={isMenuOpen}>
                <_MainHeaderComponent menuOpen={(): void => setMenuOpen((currentState: boolean): boolean => !currentState)}/>
                <HomeMainComponent/>
            </_HamburgerMenuWrapper>
        </_ToastWrapper>
    )
}

export default App
