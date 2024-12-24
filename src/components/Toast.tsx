"use client";

import { useToast } from "@/contexts/ToastContext";

const Toast = () => {
    const { toasts } = useToast();

    const toastTypeClassMap = {
        pass: "text-green-900 border-green-500",
        fail: "text-red-900 border-red-500",
        info: "text-blue-900 border-blue-500",
        warn: "text-yellow-900 border-yellow-500",
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {toasts.map(toast => (
                <div 
                    key={toast.id} 
                    className={`${toastTypeClassMap[toast.type]} flex items-center justify-center bg-white text-lg shadow-lg transition-transform border-2 p-4`}
                >
                    <span>{toast.message}</span>
                </div>
            ))}
        </div>
    );
};

export default Toast;