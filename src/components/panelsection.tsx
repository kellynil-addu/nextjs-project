import { ReactNode } from "react";

type PanelSectionProps = {
    padding?: number;
    className?: string;
    children: ReactNode
}

// Helper function to split a single rows into organized sections.
export default function PanelSection({padding = 4, className="", children}: PanelSectionProps) {
    return (
        <div className={`gap-1.5 flex content-center items-center ${className}`} style={{padding: `${padding}px`}}>
            {children}
        </div>
    )
}