"use client";

import Toast from "@/components/Toast";
import { ToastProvider } from "@/contexts/ToastContext";
import { ReactNode } from "react";

const ToastWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <ToastProvider>
            {children}
            <Toast />
        </ToastProvider>
    );
};

export default ToastWrapper;