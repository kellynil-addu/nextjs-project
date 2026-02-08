import { getMusicData } from "@/app/musicstore";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SongCover({musicid = "", className, width, height}: {musicid?: string, className?: string, width: number, height: number}) {
    // Returns an image with the appropriate song cover based on the given musicid.
    // If the song data does not exist, replace with a placeholder.
    const musicData = getMusicData(musicid);
    const [failed, setFailed] = useState(false);
    const [src, setSrc] = useState(`/covers/${musicData["id"]}.webp`);

    const onError = () => {
        if (!failed) {
            setSrc("/covers/_placeholder.jpg")
            setFailed(true);
        }
    }

    useEffect(() => {
        setSrc(`/covers/${musicData["id"]}.webp`);
        setFailed(false);
        console.log(`/covers/${musicData["id"]}.webp`)
    }, [musicid])

    return (
        <Image className={className} src={src} alt={`Cover of ${musicData["name"]}`} onError={onError} width={width} height={height}></Image>
    )
}