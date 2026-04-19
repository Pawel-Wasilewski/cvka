import type MenuPropertyClassImplementation from "../../interfaces/props/MenuPropertyClassImplementation.ts";
import {create, type StoreApi, type UseBoundStore} from "zustand";
import type MenuProperties from "../../interfaces/props/MenuProperties.ts";

export default class MenuToggleFactory implements MenuPropertyClassImplementation {

    createMenu(): UseBoundStore<StoreApi<MenuProperties>> {
        return create<MenuProperties>((set) => ({
            isToggled: false,
            toggle: (): void => set((state: MenuProperties): {isToggled: boolean} => ({isToggled: !state.isToggled})),
        }));
    }
}