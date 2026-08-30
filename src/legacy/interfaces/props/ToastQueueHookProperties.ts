import type {ToastMessageType} from "../types/toastMessageType.ts";
import type {ToastModalProperties} from "./ToastModalProperties.ts";

export default interface ToastQueueHookProperties {
    toasts: ToastModalProperties[];
    addToast: (
        messageType: ToastMessageType,
        message: string,
        duration?: number) => void;
}