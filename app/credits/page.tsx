import Link from "next/link";
import { JSX, ReactNode } from "react";

export default function Credits() {
    
    // This is a component that generates an attribution automatically.
    function Attribution({title, author, source, license}: {title: string, author: string, source: string, license: JSX.Element}) {
        return (
            <div className="leading-none">
                <span><Link className="text-blue-500" href={source}>{title}</Link> by {author}</span>
                {license}
            </div>
        )
    }
    
    const CC0 = (
        <div>
            This work is in the public domain via <Link href="https://creativecommons.org/share-your-work/public-domain/cc0/" className="text-blue-500">CC0 1.0</Link>
        </div>
    );

    const CCBY3US = (
        <div>
            Licensed under <Link href="https://creativecommons.org/licenses/by/3.0/us/">CC BY 3.0 US</Link>
        </div>
    )

    const CCBY3 = (
        <div>
            Licensed under <Link href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</Link>
        </div>
    ) 

    const CCBYNC4 = (
        <div>
            Licensed under <Link href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</Link>
        </div>
    )

    const CCBY4 = (
        <div>
            Licensed under <Link href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</Link>
        </div>
    )

    const PD = (
        <div>
            This work is in the public domain
        </div>
    )

    const TEMPLATE = (
        <div>
            Licensed under <Link href="https://example.com">LICENSE HERE</Link>
        </div>
    )

    return (
        <div className="p-12 flex flex-col gap-2">
            <b> Credits </b>
            <Attribution title="Title" author="Author" source="wikipedia.org" license={CC0}></Attribution>
            <Attribution title="Title" author="Author" source="wikipedia.org" license={CC0}></Attribution>
            <Attribution title="Title" author="Author" source="wikipedia.org" license={CC0}></Attribution>
            <Attribution title="Title" author="Author" source="wikipedia.org" license={CC0}></Attribution>
            <Attribution title="Title" author="Author" source="wikipedia.org" license={CC0}></Attribution>
            <Attribution title="Title" author="Author" source="wikipedia.org" license={CC0}></Attribution>
        </div>
    )
}