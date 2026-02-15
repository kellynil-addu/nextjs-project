import CustomButton from '@/src/components/custombutton';
import PanelSection from '@/src/components/panelsection';
import { List, LucideRepeat2, Pause, Play, Repeat2, SkipBack, SkipForward } from 'lucide-react';
import MusicSlider from './musicslider';
import { useContext, useState } from 'react';
import { AudioContext } from '@/src/components/audiocontext';
import QueueMenu from './queuemenu';

export default function PlayerPane() {
    
    const audio = useContext(AudioContext);

    const onClickPrevious = () => {
        const audioElement = audio?.getReference();

        audioElement?.fastSeek(0);
    }

    const onClickSkip = () => {
        audio?.skipSong();
    }

    return (
        <div className=" bg-zinc-100 border-t box-content border-t-slate-400 h-16 text-zinc-900 flex-none flex justify-center">
            <div className="w-full h-full max-w-6xl flex items-stretch">
                <PanelSection padding={12}>
                    <CustomButton scale highlight onClick={() => audio?.toggle()}> {audio?.playing ? (<Pause/>) : (<Play/>)} </CustomButton>
                    <CustomButton scale highlight onClick={onClickPrevious}> <SkipBack/> </CustomButton>
                    <CustomButton scale highlight onClick={onClickSkip}> <SkipForward/> </CustomButton>
                </PanelSection>

                <PanelSection className="grow" padding={8}>
                    <MusicSlider></MusicSlider>
                </PanelSection>

                <PanelSection padding={12}>
                    <CustomButton scale highlight active={audio?.isLoop} onClick={audio?.toggleLoop}> <Repeat2/> </CustomButton>
                    <PopupQueueButton></PopupQueueButton>
                </PanelSection>
            </div>
        </div>
    )
}

function PopupQueueButton() {
    const [shown, setShown] = useState(false);

    return (
        // TODO: Refactor "active" style
        <PanelSection className={`relative rounde padding={0}`}>
            <CustomButton scale highlight active={shown} onClick={() => setShown(!shown)}>
                <List className={`${shown ? "text-emerald-800" : ""}`}/>
            </CustomButton>
            { shown ? (<QueueMenu></QueueMenu>) : null }
        </PanelSection>
    )
}

