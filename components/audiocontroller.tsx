import { RefObject, useEffect, useState } from "react";

export default function useAudioController(audioel: RefObject<HTMLAudioElement | null>) {
    
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const audio = audioel.current!;
        const onPlay = () => {setPlaying(true)};
        const onPause = () => {setPlaying(false)};

        setPlaying(!audio.paused);

        audio.addEventListener("play", onPlay);
        audio.addEventListener("pause", onPause);
        
        return () => {
            audio.removeEventListener("play", onPlay);
            audio.removeEventListener("pause", onPause);
        };
    }, [])

    return {
        playing: playing,

        toggle() {
            if (audioel.current?.paused) {
                audioel.current.play();
            } else {
                audioel.current?.pause();
            }
        },

        playNewSong(file: string) {
            audioel.current?.setAttribute("src", file);
            this.toggle();
        }
    }
}