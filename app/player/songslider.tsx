'use client';

import { X } from "lucide-react";
import { RefObject, useEffect, useRef, useState } from "react"

// Converts seconds to mm:ss format
function toTime(seconds: number) {
    return new Date(seconds * 1000).toISOString().slice(11, 19);
}

export default function SongSlider({audioElement}: {audioElement: RefObject<HTMLAudioElement | null>}) {
    const slider = useRef<HTMLInputElement>(null);
    const [percent, setPercent] = useState(0);
    const [playing, setPlaying] = useState(true);

    const onChangeEvent = () => {
        const audioe = audioElement.current;
        if (!audioe) {
            return;
        } 

        if (slider.current != null) {
            setPercent(slider.current.valueAsNumber);
            audioe.fastSeek(slider.current.valueAsNumber * audioe.duration);
        } else {
            setPercent(0);
        }
    }
    
    // Custom state setup
    useEffect(() => {
        const onAudioPlay = () => setPlaying(true);
        const onAudioPause = () => setPlaying(false);

        audioElement.current?.addEventListener("play", onAudioPlay);
        audioElement.current?.addEventListener("pause", onAudioPause);
        
        return () => {
            audioElement.current?.removeEventListener("play", onAudioPlay);
            audioElement.current?.removeEventListener("pause", onAudioPause);            
        }
    }, [])

    // Listen to audio state
    useEffect(() => {
        if (playing) {
            console.log("Interval on")

            const interval: NodeJS.Timeout = setInterval(() => {
                setPercent(audioElement.current!.currentTime / audioElement.current!.duration);
            }, 100)

            return () => {
                clearInterval(interval)
            }
        } else {
            console.log("Interval off")
        }
    }, [playing])

    return (
        <div className="h-full w-96 bg-zinc-300 rounded-md overflow-hidden">
            <div className="flex h-full">
                <img src="/albumplaceholder.jpg" className="aspect-square max-h-full" />
                <div className="p-1 flex-col grow">
                    <div className="flex justify-between">
                        <small>{toTime(percent * audioElement.current!.duration)}</small>
                        <small><b>Song title</b></small>
                        <small>{toTime(audioElement.current!.duration)}</small>
                    </div>
                    <input ref={slider} min={0} max={1} step="any" value={percent} onChange={onChangeEvent} className="w-full" type="range"></input>
                </div>
            </div>
        </div>
    )
}