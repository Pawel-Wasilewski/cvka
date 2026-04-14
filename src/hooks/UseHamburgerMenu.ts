import {create, type StoreApi, type UseBoundStore} from "zustand";
import type HamburgerMenuHookProperties from "../interfaces/props/HamburgerMenuHookProperties.ts";

const UseHamburgerMenu: UseBoundStore<StoreApi<HamburgerMenuHookProperties>> = create<HamburgerMenuHookProperties>((set) => ({
    isToggled: false,
    toggle: (): void => set((state: HamburgerMenuHookProperties): {isToggled: boolean} => ({isToggled: !state.isToggled})),
}));

export default UseHamburgerMenu;