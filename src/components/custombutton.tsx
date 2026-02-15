'use client';

import { ReactNode } from "react";

type MyButtonProp = {
    children: ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
    tooltip?: string;
    highlight?: boolean;
    scale?: boolean;
    active?: boolean;
}

// This component is a customizable button with optional add-on effects like highlighting the button
export default function CustomButton({children, className, onClick, tooltip, highlight = false, scale = false, active = false}: MyButtonProp) {
    const lightenStyles = `bg-none ${!active ? "hover:bg-gray-300/50" : ""} p-1 rounded`;
    const sizeStyles = "hover:scale-110 active:scale-90";
    const activeStyles = "bg-emerald-100 hover:bg-emerald-200";
    
    const addonStyles = `
        ${highlight ? lightenStyles : ""}\
        ${scale ? sizeStyles : ""}\
        ${active ? activeStyles : ""}
    `;

    return (
        <div onClick={onClick} className={`${addonStyles} ${className} p-0.5 inline-block prounded transition-all cursor-pointer`}>
            {children}
        </div>
    )
}