'use client';

import CustomButton from "@/components/custombutton";

export default function NavPane() {
    return (
        <div className=" bg-lime-100 h-12 text-zinc-900 flex-none flex justify-center">
            <div className="w-full h-full flex items-center gap-2 max-w-6xl pl-4 pr-4">
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
        </div>
    )
}

function NavTab({ref, children}: {ref: string, children: React.ReactNode;}) {

    const onClickFunction = (e: React.MouseEvent) => {
        alert(`You've selected ${ref}`);
    };

    return (
        <CustomButton highlight scale onClick={onClickFunction} className="grow">
            <div className="h-9 p-2 min-w-24 flex items-center justify-center bg-lime-200 rounded text-lime-700">{children}</div>
        </CustomButton>
    )
}