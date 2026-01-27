import PanelSection from "@/components/panelsection";
import { ReactNode } from "react";

export default function NavPane() {
    return (
        <div className="bg-lime-100 h-12 text-zinc-900 flex-none flex items-stretch">
            <PanelSection padding={10}>
                <NavTab>Tab 1</NavTab>
                <NavTab>Tab 2</NavTab>
                <NavTab>Tab 3</NavTab>
            </PanelSection>
        </div>
    )
}

function NavTab({children}: {children: ReactNode}) {
return (
        <button className="h-max hover:cursor-pointer bg-lime-200 rounded text-lime-700">{children}</button>
    )
}