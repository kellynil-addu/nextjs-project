import CustomButton from '@/components/custombutton';
import PanelSection from '@/components/panelsection';
import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import SongSlider from './player/songslider';
import { RefObject, useEffect, useState } from 'react';

export default function PlayerPane({audioElement}: {audioElement: RefObject<HTMLAudioElement | null>}) {
    const [paused, setPaused] = useState(true);
    
    const onClickToggleSong = () => {
        if (!audioElement.current) {
            alert("Does not exist");
            return;
        }

        if (audioElement.current.paused == false) {
            audioElement.current.pause()
        } else {
            audioElement.current.play()
        }
    };

    useEffect(() => {
        const onPlay = () => setPaused(false);
        const onPause = () => setPaused(true);

        audioElement.current?.addEventListener("play", onPlay);
        audioElement.current?.addEventListener("pause", onPause);
        
        return (() => {
            audioElement.current?.removeEventListener("play", onPlay);
            audioElement.current?.removeEventListener("pause", onPause);
        })
    }, [])

    const onClickPlaceholder = () => {
        alert("This button click event is not yet implemented.");
    }

    return (
        <div className="bg-zinc-100 border-t box-content border-t-slate-400 h-16 text-zinc-900 flex-none flex items-stretch">
            <PanelSection padding={12}>
                <CustomButton scale highlight onClick={onClickToggleSong}> {paused ? (<Play/>) : (<Pause/>)} </CustomButton>
                <CustomButton scale highlight onClick={onClickPlaceholder}> <SkipBack/> </CustomButton>
                <CustomButton scale highlight onClick={onClickPlaceholder}> <SkipForward/> </CustomButton>
            </PanelSection>

            <PanelSection padding={8}>
                <SongSlider audioElement={audioElement}></SongSlider>
            </PanelSection>
        </div>
    )
}

