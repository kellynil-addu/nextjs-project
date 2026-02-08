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
            Licensed under <Link className="text-blue-500" href="https://creativecommons.org/licenses/by/3.0/us/">CC BY 3.0 US</Link>
        </div>
    )

    const CCBY3 = (
        <div>
            Licensed under <Link className="text-blue-500" href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</Link>
        </div>
    ) 

    const CCBYNC4 = (
        <div>
            Licensed under <Link className="text-blue-500" href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</Link>
        </div>
    )

    const CCBY4 = (
        <div>
            Licensed under <Link className="text-blue-500" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</Link>
        </div>
    )

    const PD = (
        <div>
            This work is in the public domain
        </div>
    )

    const PDM1 = (
        <div>
            This work is in the public domain via <Link className="text-blue-500" href="https://creativecommons.org/publicdomain/mark/1.0/">PDM 1.0</Link>
        </div>
    )

    const TEMPLATE = (
        <div>
            Licensed under <Link className="text-blue-500" href="https://example.com">LICENSE HERE</Link>
        </div>
    )

    return (
        <div className="p-12 flex flex-col gap-2">
            <b> Credits </b>
            <Attribution title="Chills" author="Holizna" source="https://freemusicarchive.org/music/holiznacc0/sad-beats/chills/" license={CC0}></Attribution>
            <Attribution title="Ronin" author="EXETEXE" source="https://freemusicarchive.org/music/exetexe/free-stuff-v1/ronin/" license={CCBY4}></Attribution>
            <Attribution title="Making Clouds" author="JMHBM" source="https://freemusicarchive.org/music/beat-mekanik/single/making-clouds/" license={CCBY4}></Attribution>
            <Attribution title="Driven To Success" author="Scott Holmes Music" source="https://freemusicarchive.org/music/Scott_Holmes/corporate-motivational-background-music/Driven_To_Success_1973/" license={CCBYNC4}></Attribution>
            <Attribution title="All The Way Up" author="eddy" source="https://freemusicarchive.org/music/eddy/2_Damn_Loud/All_The_Way_Up_mastered-with-CloudBounce/" license={CCBY4}></Attribution>
            <Attribution title="Erik Satie - Gymnopédie No.1" author="Kevin MacLeod" source="https://freemusicarchive.org/music/Kevin_MacLeod/Classical_Sampler/Gymnopedie_No_1/" license={CCBY3}></Attribution>
            <Attribution title="Something Elated" author="Broke For Free" source="https://freemusicarchive.org/music/Broke_For_Free/Something_EP/Broke_For_Free_-_Something_EP_-_05_Something_Elated/" license={CCBY3US}></Attribution>
            <Attribution title="Happy Clappy" author="John Bartmann" source="https://freemusicarchive.org/music/John_Bartmann/Public_Domain_Soundtrack_Music_Album_One/happy-clappy/" license={CC0}></Attribution>
            <Attribution title="Haratanaya Sree" author="Veena Kinhal" source="https://freemusicarchive.org/music/Veena_Kinhal/Tribute_to_Veena_Raja_Rao/Haratanaya_Sree/" license={PD}></Attribution>
            <Attribution title="Beethoven – Piano Sonata Nr.15 In D Major Op.28 Pastoral – I. Allegro" author="Karine Gilanyan" source="https://freemusicarchive.org/music/Karine_Gilanyan/Beethovens_Sonata_No_15_in_D_Major/Beethoven_-_Piano_Sonata_nr15_in_D_major_op28_Pastoral_-_I_Allegro/" license={PD}></Attribution>
            <Attribution title="Mozart: Sonata KV 331 – 3. Alla Turca" author="Markus Staab" source="https://www.chosic.com/download-audio/25957/" license={CCBY3}></Attribution>
            <Attribution title="Handel , Largo (from ‘Xerxes’)" author="Author" source="https://www.chosic.com/download-audio/25909/" license={PDM1}></Attribution>
            <Attribution title="Mozart: Symphony No. 40 In G Minor, K. 550 – I. Molto Allegro" author="Musopen Symphony" source="https://www.chosic.com/download-audio/25966/" license={PDM1}></Attribution>
            <Attribution title="Spring Field" author="陽菜/Hina" source="https://www.chosic.com/download-audio/27012/" license={CC0}></Attribution>
            <Attribution title="Stardust" author="JSH" source="https://www.chosic.com/download-audio/27019/" license={CC0}></Attribution>
        </div>
    )
}