import type {JSX, ReactNode} from "react";
import type {ToastModalProperties} from "../../interfaces/props/ToastModalProperties.ts";
import ToastModal from "./ToastModal.tsx";

interface ToastWrapperProps {
    toasts: ToastModalProperties[];
    children: ReactNode;
}

export default function _ToastWrapper(props: ToastWrapperProps): JSX.Element {
    return (<>
        {props.children}
        <section className={"fixed top-0 right-0 w-full md:w-auto p-4 z-1 flex flex-col items-end gap-4"}>
            {props.toasts.map((toast: ToastModalProperties, index:number): JSX.Element => (
                <ToastModal key={index} id={toast.id} toastType={toast.toastType} message={toast.message} duration={toast.duration}/>
            ))}
        </section>
        </>)
}