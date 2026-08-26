import type {ToastMessageType} from "../types/toastMessageType.ts";

export interface ToastModalProperties {
    id: string;
    toastType: ToastMessageType;
    message: string;
    // millisecond duration of the toast
    duration: number;
}