import type {StoreApi, UseBoundStore} from "zustand";
import type MenuProperties from "./MenuProperties.ts";

export default interface MenuPropertyClassImplementation {
    createMenu(): UseBoundStore<StoreApi<MenuProperties>>;
}