import { setRequestMeta } from "next/dist/server/request-meta";
import { RefObject, useEffect, useRef, useState } from "react";

// Outputs an interface for audio controls. It can be shared by different components
export default function useAudioController(audioel: RefObject<HTMLAudioElement | null>) {
    
    const [playing, setPlaying] = useState(false);
    const [curSongId, setCurSongId] = useState<string>();
    const [curSongLength, setCurSongLength] = useState(0);
    const [queue, setQueue] = useState<string[]>([]);
    const [isLoop, setIsLoop] = useState(true);
    const [queuePos, setQueuePos] = useState<number>(0);
    
    // For use with listeners
    const queueRef = useRef<string[]>(queue);
    const isLoopRef = useRef(isLoop);
    useEffect(() => {queueRef.current = queue}, [queue]);
    useEffect(() => {isLoopRef.current = isLoop}, [isLoop]);
    
    // Listen to <audio> state during mount
    useEffect(() => {
        const audio = audioel.current!;
        const onPlay = () => {setPlaying(true)};
        const onPause = () => {setPlaying(false)};
        const onEnd = () => {skipSong()};

        setPlaying(!audio.paused);

        audio.addEventListener("play", onPlay);
        audio.addEventListener("pause", onPause);
        audio.addEventListener("ended", onEnd);
        
        return () => {
            audio.removeEventListener("play", onPlay);
            audio.removeEventListener("pause", onPause);
            audio.removeEventListener("ended", onEnd);            
        };
    }, [])

    // Manage switching of songs.
    useEffect(() => {
        const id = queue[queuePos];
        if (id) {
            const newSrc = "/audio/" + id + ".mp3";
            audioel.current!.src = newSrc;
            audioel.current?.play().then(() => {
                setCurSongLength(audioel.current?.duration ?? 0);
            });
        } else {
            audioel.current!.src = "";
        }
    }, [queuePos, queue[queuePos]]);

    useEffect(() => {
        setCurSongId(queue[queuePos]);
    }, [queue[queuePos]]);

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

    function toggleLoop() {
        setIsLoop(loop => !loop);
    }

    function skipSong() {
        setQueuePos((queuePos) => {
            let newIndex = queuePos + 1;
            return !isLoop ? newIndex : newIndex % queueRef.current.length;
        });

        // Edge case for when there is only one song in queue
        if (isLoopRef.current && queueRef.current.length === 1) {
            audioel.current?.pause();
            audioel.current!.currentTime = 0;
            audioel.current?.play();       
        }
    }

    function playNow(id: string) {
        // Inserts first into the queue.
        setQueue(queue => queue.toSpliced(queuePos, 0, id));
    }

    function enqueueSong(id: string) {
        setQueue(queue => [...queue, id]);
    }

    function dequeueSong(pos: number) {
        if (pos < queuePos) setQueuePos(queuePos => queuePos - 1);
        setQueue(queue => queue.toSpliced(pos, 1));
    }

    return {
        playing,
        curSongId,
        curSongLength,
        getReference,
        toggle,
        isLoop,
        toggleLoop,
        skipSong,
        jumpQueue: setQueuePos,
        playNow, 
        enqueueSong, 
        dequeueSong,
        queue,
        queuePos,
    }
}