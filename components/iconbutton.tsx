export default function IconButton({children,}: {children: React.ReactNode;}) {
    return (
        <div className="bg-none hover:bg-gray-300/50 p-1 rounded hover:scale-110 transition-all inline-block cursor-pointer active:scale-90">
            {children}
        </div>
    )
}