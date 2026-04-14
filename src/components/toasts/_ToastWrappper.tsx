import type {JSX, ReactNode} from "react";
import type {ToastModalProperties} from "../../interfaces/props/ToastModalProperties.ts";
import ToastModal from "./ToastModal.tsx";
import UseToastQueue from "../../hooks/UseToastQueue.ts";
import type ToastQueueHookProperties from "../../interfaces/props/ToastQueueHookProperties.ts";
import { motion } from "motion/react";

interface ToastWrapperProps {
    children: ReactNode;
}

export default function _ToastWrapper(props: ToastWrapperProps): JSX.Element {
    const toasts: ToastModalProperties[] = UseToastQueue((state: ToastQueueHookProperties): ToastModalProperties[] => state.toasts);
    return (<>
        {props.children}
        <section className={"fixed top-0 right-0 w-full md:w-auto p-4 z-1 flex flex-col items-end gap-4"}>
            {toasts.map((toast: ToastModalProperties, index:number): JSX.Element => (
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}>
                    <ToastModal key={index} id={toast.id} toastType={toast.toastType} message={toast.message} duration={toast.duration}/>
                </motion.div>
            ))}
        </section>
        </>)
}