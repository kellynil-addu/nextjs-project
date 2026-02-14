import { MouseEvent, useContext, useRef, useState } from "react";
import CustomButton from "./custombutton";
import { AudioContext } from "./audiocontext";
import { getMusicData } from "@/app/_components/musicstore";
import { Heart, Pause, Play, PlusCircle } from "lucide-react";
import SongCover from "./songcover";

// Component for the Music card, displaying the summary details of a song.
export default function MusicCard({musicid}: {musicid: string}) {
    const controller = useContext(AudioContext); 
    const musicData = getMusicData(musicid);
    
    const [mouseIn, setMouseIn] = useState(false);

    const onPlay = () => {
        if (controller?.curSongId !== musicid) {
            controller?.playNewSong(musicid);
        } else {
            controller.toggle();
        }
    }
    const onLike = (e: MouseEvent) => {
        e.stopPropagation();
        alert("Favorites not implemented yet")
    }
    const onEnqueue = (e: MouseEvent) => {
        e.stopPropagation();
        alert("Queue not implemented yet")
    }
    const onMouseEnter = () => setMouseIn(true);
    const onMouseLeave = () => setMouseIn(false);

    const fadeFx = (on: boolean) => "transition-opacity " + (on ? "opacity-100" : "opacity-0");

    // Component for the play/pause button.
    // Listens to the audio controller if the song of choice is currently playing or not.
    function ToggleButton({className}: {className?: string} ) {
        return (
            <CustomButton className={className} scale >
                <div className="bg-gray-300/90 p-1 w-16 h-16 rounded-full flex justify-center items-center">
                    {
                        (controller?.playing && controller.curSongId == musicid)
                        ? (<Pause size={32} fill="black"/>)
                        : (<Play size={32} fill="black"/>)
                    }
                </div>
            </CustomButton>
        )
    }

    

    return (
        <div className={`w-48 h-64 relative ${mouseIn ? "z-1" : ""}`}>
            {/* This div is to occupy space in the flex display. The size never changes. */}

            <div onClick={onPlay} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`bg-gray-200 overflow-hidden cursor-pointer rounded-2xl absolute shadow-md flex flex-col transition-[height,max-height] ${mouseIn ? "h-72" : "h-64"}`}> 
                {/* This div is the actual gray base that can get over the actual occupied space. (Happens when the card is hovered over) */}
                <div className="w-48 h-48 relative">
                    <SongCover className="absolute" musicid={musicid} width={192} height={192}></SongCover>
                    <div className={`${fadeFx(mouseIn)} absolute w-full h-full flex justify-center items-center`}>
                        <ToggleButton></ToggleButton>   
                    </div>
                    <div className={`${fadeFx(mouseIn)} absolute bottom-0 p-1 w-full flex items-center justify-between`}>
                        <div className="flex gap-1">
                            <CustomButton scale highlight onClick={onLike}> <Heart fill="white" fillOpacity={0.5}/> </CustomButton>
                            <CustomButton scale highlight onClick={onEnqueue}> <PlusCircle fill="white" fillOpacity={0.5}/> </CustomButton>
                        </div>
                    </div>
                </div>

                <div className={`p-2 flex flex-col grow shrink transition-[height,max-height] ${mouseIn ? "max-h-24" : "max-h-16"}`}>
                    <h3 className={`font-semibold text-sm text-teal-950 leading-none overflow-hidden h-0 flex-1 grow`}>
                        {musicData["name"]}
                    </h3>

                    <p className={`text-sm leading-none pt-0.5 pb-0.5`}>
                        {musicData["artist"]}
                    </p>
                </div>
            </div>
        </div>
    )
}