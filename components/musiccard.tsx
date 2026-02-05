import { useContext } from "react";
import CustomButton from "./custombutton";
import { AudioContext, AudioRef } from "./audiocontext";
import useAudioController from "./audiocontroller";

export default function MusicCard({musicid}: {musicid: string}) {
    
    const controller = useContext(AudioContext); 
    
    const play = () => {
        controller?.playNewSong(musicid);
    }

    return (
        <div className="bg-gray-200 p-4 rounded-2xl flex-1 max-w-64 shadow-md">
            {musicid}
            <br></br>

            <CustomButton scale onClick={play}>
                <div className="bg-gray-300 p-0.5 rounded">Play</div>
            </CustomButton>
        </div>
    )
}