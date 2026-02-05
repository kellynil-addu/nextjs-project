import { RefObject, useEffect, useState } from "react";

export default function useAudioController(audioel: RefObject<HTMLAudioElement | null>) {
    
    const [playing, setPlaying] = useState(false);

    const [curSongId, setCurSongId] = useState<String>();

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

    useEffect(() => {
        if (curSongId) {
            audioel.current!.src = "/audio/" + curSongId + ".mp3";
            audioel.current?.play();
        }
    }, [curSongId]);

    return {
        playing: playing,

        curSongId: curSongId,

        toggle() {
            if (audioel.current?.paused) {
                audioel.current.play();
            } else {
                audioel.current?.pause();
            }
        },

        playNewSong(id: string) {
            setCurSongId(id);
        }
    }
}