export default function IconButton({children,}: {children: React.ReactNode;}) {
    return (
        <div className="bg-none hover:bg-gray/50 rounded hover:scale-110 transition-all inline-block cursor-pointer">
            {children}
        </div>
    )
}