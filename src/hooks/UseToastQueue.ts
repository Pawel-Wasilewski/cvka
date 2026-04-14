import {create, type StoreApi, type UseBoundStore} from "zustand";
import type ToastQueueHookProperties from "../interfaces/props/ToastQueueHookProperties.ts";
import type {ToastMessageType} from "../interfaces/types/toastMessageType.ts";
import type {ToastModalProperties} from "../interfaces/props/ToastModalProperties.ts";

const UseToastQueue: UseBoundStore<StoreApi<ToastQueueHookProperties>> = create<ToastQueueHookProperties>((set) => ({
    toasts: [],
    addToast: (messageType: ToastMessageType, message: string, duration = 3000): void => {
        const id: string = Date.now().toString();
        set((state: ToastQueueHookProperties) => ({
            toasts: [
                ...state.toasts,
                { id, toastType: messageType, message, duration },
            ],
        }));

        setTimeout((): void => {
            set((state: ToastQueueHookProperties) => ({
                toasts: state.toasts.filter((toast: ToastModalProperties): boolean => toast.id !== id),
            }));
        }, duration);
    },
}));

export default UseToastQueue;