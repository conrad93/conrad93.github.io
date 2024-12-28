"use client";

import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { generateUniqueId } from "@/lib/utility";

interface Toast {
    id: string;
    message: string;
    type: "pass" | "fail" | "info" | "warn";
    duration: number;
};

interface ToastContextType {
    toasts: Toast[];
    addToast: (message: string, type: "pass" | "fail" | "info" | "warn", duration: number) => void;
    removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const timers = useRef<{ [key: string]: NodeJS.Timeout }>({});

    const addToast = (message: string, type: "pass" | "fail" | "info" | "warn", duration: number) => {
        const id = generateUniqueId();
        setToasts((prevToasts) => [...prevToasts, { id, message, type, duration }]);
        timers.current[id] = setTimeout(() => {
            removeToast(id);
            delete timers.current[id];
        }, duration);
    };

    const removeToast = (id: string) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
        if (timers.current[id]) {
            clearTimeout(timers.current[id]);
            delete timers.current[id];
        }
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