'use client';

import CustomButton from "@/components/custombutton";

export default function NavPane() {
    return (
        <div className="bg-lime-100 h-12 text-zinc-900 flex-none flex items-center gap-2">
            <NavTab ref="home">
                Home
            </NavTab>
            <NavTab ref="library">
                My Library
            </NavTab>
            <NavTab ref="search">
                Search
            </NavTab>
        </div>
    )
}

function NavTab({ref, children}: {ref: string, children: React.ReactNode;}) {

    const onClickFunction = (e: React.MouseEvent) => {
        alert(`You've selected ${ref}`);
    };

    return (
        <CustomButton scale onClick={onClickFunction}>
            <div className="h-9 p-2 min-w-24 flex items-center justify-center bg-lime-200 rounded text-lime-700">{children}</div>
        </CustomButton>
    )
}