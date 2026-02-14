import CustomButton from '@/src/components/custombutton';
import PanelSection from '@/src/components/panelsection';
import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import MusicSlider from './musicslider';
import { useContext } from 'react';
import { AudioContext } from '@/src/components/audiocontext';

export default function PlayerPane() {
    
    const audio = useContext(AudioContext);

    const onClickPlaceholder = () => {
        alert("This button click event is not yet implemented.");
    }

    const onClickPrevious = () => {
        const audioElement = audio?.getReference();
        audioElement?.fastSeek(0);
    }

    return (
        <div className=" bg-zinc-100 border-t box-content border-t-slate-400 h-16 text-zinc-900 flex-none flex justify-center">
            <div className="w-full h-full max-w-6xl flex items-stretch">
                <PanelSection padding={12}>
                    <CustomButton scale highlight onClick={() => audio?.toggle()}> {audio?.playing ? (<Pause/>) : (<Play/>)} </CustomButton>
                    <CustomButton scale highlight onClick={onClickPrevious}> <SkipBack/> </CustomButton>
                    <CustomButton scale highlight onClick={onClickPlaceholder}> <SkipForward/> </CustomButton>
                </PanelSection>

                <PanelSection className="grow" padding={8}>
                    <MusicSlider></MusicSlider>
                </PanelSection>
            </div>
        </div>
    )
}

