import MenuToggleFactory from "./factories/MenuToggleFactory.ts";
import type {StoreApi, UseBoundStore} from "zustand";
import type MenuProperties from "@/legacy/interfaces/props/MenuProperties.ts";

const HamburgerMenuFactory = new MenuToggleFactory();
export const UseHamburgerMenu: UseBoundStore<StoreApi<MenuProperties>> = HamburgerMenuFactory.createMenu();
export default UseHamburgerMenu;