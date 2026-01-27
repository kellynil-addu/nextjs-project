import GenericButton from "@/components/genericbutton";
import IconButton from "@/components/iconbutton";
import PanelSection from "@/components/panelsection";
import { ReactNode } from "react";

export default function NavPane() {
    return (
        <div className="bg-lime-100 h-14 text-zinc-900 flex-none flex items-stretch">
            <PanelSection padding={6}>
                <NavTab tab="Tab 1">Tab 1</NavTab>
                <NavTab tab="Tab 2">Tab 2</NavTab>
                <NavTab tab="Tab 3">Tab 3</NavTab>
            </PanelSection>
        </div>
    )
}

function NavTab({children, tab}: {tab: string, children: ReactNode}) {
    function onClickTest(event: React.MouseEvent<Element>) {
        alert(tab)
        return {}
    }
    
    return (
        <GenericButton onClick={onClickTest}>
            <div className="h-full p-2 font-bold bg-lime-200 rounded text-lime-700">
                {children}
            </div>
        </GenericButton>
    )
}
