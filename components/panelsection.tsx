import { ReactNode } from "react";

type PanelSectionProps = {
    padding?: number;
    children: ReactNode
}

export default function PanelSection({padding = 4, children}: PanelSectionProps) {
    return (
        <div className={`gap-1.5 flex content-center items-center`} style={{padding: `${padding}px`}}>
            {children}
        </div>
    )
}