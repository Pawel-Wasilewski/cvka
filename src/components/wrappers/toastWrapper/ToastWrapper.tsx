import {type JSX} from "react";
import type ToastWrapperProps from "@/components/wrappers/toastWrapper/ToastWrapperProps.ts";
import {Toaster} from "@/components/ui/toast.tsx";

/**
 * @description This component is a wrapper for the toast notifications. It is used to display the toast notifications in a consistent manner across the application.
 */
export default function ToastWrapper(toastWrapperProps: ToastWrapperProps): JSX.Element {

    const children: JSX.Element | JSX.Element[] | undefined = toastWrapperProps.children;

    return (<>
        <Toaster/>
        {children}
    </>);
}