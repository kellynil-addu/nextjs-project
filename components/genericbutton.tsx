import { ReactNode } from "react";

type ButtonProp = {
    onClick: (e: React.MouseEvent) => {};
    children: ReactNode;
}

export default function GenericButton({onClick, children}: ButtonProp) {
    return (
        <div onClick={onClick} className="bg-none p-0.5 contents prounded hover:scale-110 transition-all inline-block cursor-pointer active:scale-90">
            {children}
        </div>
    )
}

// import { ReactNode } from "react";

// type IconButtonProp = {
//     label: string;
//     children: ReactNode;
// }

// export default function IconButton({label = "", children}: IconButtonProp) {
//     return (
//         <div className="bg-none hover:bg-gray-300/50 p-1 rounded hover:scale-110 transition-all inline-block cursor-pointer active:scale-90">
//             {children}
//             {label}
//         </div>
//     )
// }