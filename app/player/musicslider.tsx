'use client';

import { AudioContext } from "@/components/audiocontext";
import { useContext, useEffect, useRef, useState } from "react"
import { getMusicData } from "../musicstore";

// Converts seconds to mm:ss format
function toTime(seconds: number) {
    if (!seconds) return "00:00:00";
    return new Date(seconds * 1000).toISOString().slice(11, 19);
}

export default function MusicSlider() {
    const slider = useRef<HTMLInputElement>(null);
    const [percent, setPercent] = useState(0);

    const audio = useContext(AudioContext);

    const onMoveSlider = () => {
        const audioElement = audio?.getReference();
        if (!audioElement) {
            return;
        } 

        if (slider.current != null) {
            setPercent(slider.current.valueAsNumber);
            audioElement.fastSeek(slider.current.valueAsNumber * audioElement.duration);
        } else {
            setPercent(0);
        }
    }

    const getMusicTitle = (songid?: string) => {
        if (songid) {
            return getMusicData(songid)["name"];
        } else {
            return "No music playing"
        }
    }

    // Listen to audio state
    useEffect(() => {
        if (audio?.playing) {
            const audioElement = audio?.getReference();
            
            const interval: NodeJS.Timeout = setInterval(() => {
                setPercent(audioElement!.currentTime / audioElement!.duration);
            }, 100)

            return () => {
                clearInterval(interval)
            }
        }
    }, [audio?.playing])

    return (
        <div className="h-full w-full bg-zinc-300 rounded-md overflow-hidden shrink">
            <div className="flex h-full">
                <img src="/covers/_placeholder.jpg" className="aspect-square max-h-full" />
                <div className="p-1 flex-col grow">
                    <div className="flex justify-between">
                        <small className="w-16">
                            {toTime(percent * (audio?.curSongLength ?? 0))}
                        </small>
                        <small className="text-ellipsis text-center whitespace-nowrap overflow-hidden grow shrink w-0">
                            <b>{getMusicTitle(audio?.curSongId)}</b>
                        </small>
                        <small className="w-16 text-right">
                            {toTime(audio?.curSongLength ?? 0)}
                        </small>
                    </div>
                    <input ref={slider} min={0} max={1} step="any" value={percent ?? 0} onChange={onMoveSlider} className="w-full" type="range"></input>
                </div>
            </div>
        </div>
    )
}