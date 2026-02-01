'use client';

import { ReactNode } from "react";

type MyButtonProp = {
    children: ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    tooltip?: string;
    highlight?: boolean;
    scale?: boolean;
}

// This component is a customizable button with optional add-on effects like highlighting the button
export default function CustomButton({children, onClick, tooltip, highlight = false, scale = false}: MyButtonProp) {
    const lightenStyles = "bg-none hover:bg-gray-300/50 p-1 rounded";
    const sizeStyles = "hover:scale-110 active:scale-90";
    
    const addonStyles = `
        ${highlight ? lightenStyles : ""}\
        ${scale ? sizeStyles : ""}\
    `;

    return (
        <div onClick={onClick} className={`${addonStyles} bg-none p-0.5 inline-block prounded transition-all cursor-pointer`}>
            {children}
        </div>
    )
}