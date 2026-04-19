import MenuToggleFactory from "./factories/MenuToggleFactory.ts";
import type {StoreApi, UseBoundStore} from "zustand";
import type MenuProperties from "../interfaces/props/MenuProperties.ts";

const PDFMenuFactory = new MenuToggleFactory();
const usePDFMenu: UseBoundStore<StoreApi<MenuProperties>> = PDFMenuFactory.createMenu();
export default usePDFMenu;