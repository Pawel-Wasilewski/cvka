import type ToastQueueProperties from "../interfaces/props/ToastQueueProperties.ts";
import {useState, useEffect, useRef} from "react";
import type {ToastModalProperties} from "../interfaces/props/ToastModalProperties.ts";
import type {ToastMessageType} from "../interfaces/types/toastMessageType.ts";

export default function UseToastQueue(): ToastQueueProperties {
    const [toastQueue, setToastQueue] = useState<ToastModalProperties[]>([])

    function addToast(messageType: ToastMessageType, message: string, duration: number = 5000): void {
        const newToast: ToastModalProperties = {
            id: `${Date.now()}-${Math.random()}`,
            toastType: messageType,
            message: message,
            duration: duration,
        }

        setToastQueue((currentQueue: ToastModalProperties[]): ToastModalProperties[] => [...currentQueue, newToast])
    }

    function removeToast(id: string): void {
        setToastQueue((currentQueue: ToastModalProperties[]): ToastModalProperties[] =>
            currentQueue.filter((toast: ToastModalProperties): boolean => toast.id !== id)
        );
    }


    const timerRefs = useRef<Map<string, number>>(new Map());

    useEffect(() => {
        toastQueue.forEach((toast) => {
            if (!timerRefs.current.has(toast.id)) {
                const timer = setTimeout(() => {
                    removeToast(toast.id);
                    timerRefs.current.delete(toast.id);
                }, toast.duration);

                timerRefs.current.set(toast.id, timer);
            }
        });
    }, [toastQueue]);

    return {
        toasts: toastQueue,
        addToast,
        removeToast,
    }
}