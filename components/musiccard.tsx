import { useContext, useRef, useState } from "react";
import CustomButton from "./custombutton";
import { AudioContext, AudioRef } from "./audiocontext";
import { getMusicData } from "@/app/musicstore";
import Image from "next/image";
import { Heart, Pause, Play, PlusCircle } from "lucide-react";

// Component for the Music card, displaying the summary details of a song.
export default function MusicCard({musicid}: {musicid: string}) {
    
    const controller = useContext(AudioContext); 
    
    const play = () => {
        controller?.playNewSong(musicid);
    }

    const musicData = getMusicData(musicid);

    // Component for the play/pause button.
    // Listens to the audio controller if the song of choice is currently playing or not.
    function ToggleButton() {
        return (
            <CustomButton scale onClick={play}>
                <div className="bg-gray-300 p-1 w-16 rounded flex justify-center">
                    {
                        (controller?.playing && controller.curSongId == musicid)
                        ? (<Pause/>)
                        : (<Play/>)
                    }
                </div>
            </CustomButton>
        )
    }


    return (
        <div className="bg-gray-200 overflow-hidden rounded-2xl w-48 h-64 shadow-md flex flex-col"> {/* Gray base that divides into columns */}
            <div className="w-48 h-48 relative"> {/* Gray base that divides into columns */}
                <SongCover musicid={musicid}></SongCover>
                <div className="absolute bottom-0 p-1 w-full flex items-center justify-between">
                    <ToggleButton></ToggleButton>
                    <div className="flex gap-1">
                        <CustomButton scale highlight> <Heart fill="white" fillOpacity={0.5}/> </CustomButton>
                        <CustomButton scale highlight> <PlusCircle fill="white" fillOpacity={0.5}/> </CustomButton>
                    </div>
                </div>
            </div>
            <h3 className="font-semibold text-sm p-2 text-teal-950 leading-4">
                {musicData["name"]}
            </h3>
        </div>
    )
}



function SongCover({musicid}: {musicid: string}) {
    // Returns an image with the appropriate song cover based on the given musicid.
    // If the song data does not exist, replace with a placeholder.

    const musicData = getMusicData(musicid);
    const [failed, setFailed] = useState(false);
    const [src, setSrc] = useState(`/covers/${musicData["id"]}.jpg`);

    const onError = () => {
        if (!failed) {
            setSrc("/covers/_placeholder.jpg")
            setFailed(true);
        }
    }

    return (
        <Image src={src} alt={`Cover of ${musicData["name"]}`} onError={onError} width={192} height={192}></Image>
    )
}