"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface Toast {
    id: number;
    message: string;
    type: "pass" | "fail" | "info" | "warn";
    duration: number;
};

interface ToastContextType {
    toasts: Toast[];
    addToast: (message: string, type: "pass" | "fail" | "info" | "warn", duration: number) => void;
    removeToast: (id: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (message: string, type: "pass" | "fail" | "info" | "warn", duration: number) => {
        const id = Date.now();
        setToasts([...toasts, { id, message, type, duration }]);
        setTimeout(() => removeToast(id), duration);
    };

    const removeToast = (id: number) => {
        setToasts(toasts.filter(toast => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};