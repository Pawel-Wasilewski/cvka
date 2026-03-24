import type {JSX} from "react";
import type {ToastModalProperties} from "../../interfaces/props/ToastModalProperties.ts";

export default function ToastModal(prop: ToastModalProperties): JSX.Element {
    return (
        <div className={`w-1/5 md:w-auto p-4 rounded-lg shadow-md text-white ${prop.toastType === "success" ? "bg-green-500" : "bg-red-500"}`}>
            {prop.message}
        </div>
    )
}