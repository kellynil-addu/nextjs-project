import { RefObject, useEffect, useState } from "react";

export default function useAudioController(audioel: RefObject<HTMLAudioElement | null>) {
    
    const [playing, setPlaying] = useState(false);
    const [curSongId, setCurSongId] = useState<string>();
    const [curSongLength, setCurSongLength] = useState(0);

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
            audioel.current?.play().then(() => {
                setCurSongLength(audioel.current?.duration ?? 0);
            });
        }
    }, [curSongId]);

    function getReference() {
        return audioel.current!;
    }

    function toggle() {
        // Plays or pauses the audio.
        if (audioel.current?.paused) {
            audioel.current.play();
        } else {
            audioel.current?.pause();
        }
    }

    function playNewSong(id: string) {
        setCurSongId(id);
    }

    return {
        playing,
        curSongId,
        curSongLength,
        getReference,
        toggle,
        playNewSong
    }
}