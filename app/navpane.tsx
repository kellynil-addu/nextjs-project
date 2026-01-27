export default function NavPane() {
    return (
        <div className="bg-lime-100 h-12 text-zinc-900 flex-none">
            Navigation
            <NavTab>Tab 1</NavTab>
            <NavTab>Tab 2</NavTab>
            <NavTab>Tab 3</NavTab>
        </div>
    )
}

function NavTab({children,}: {children: React.ReactNode;}) {
    return (
        <button className="h-10 bg-lime-200 rounded text-lime-700">{children}</button>
    )
}