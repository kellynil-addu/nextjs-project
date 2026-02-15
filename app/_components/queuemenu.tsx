import { AudioContext } from "@/src/components/audiocontext";
import { useContext } from "react";
import { getMusicData } from "./musicstore";
import CustomButton from "@/src/components/custombutton";
import { Trash } from "lucide-react";

export default function QueueMenu() {
    const controller = useContext(AudioContext);
    
    const noSongs = (
        <div>
            <small>No songs are added into the queue yet.</small>
        </div>
    )

    return (
        <div className="p-4 bg-zinc-300 shadow-md absolute bottom-14 right-0 w-xs z-10 rounded-md">
            <big><b>Queue</b></big>

            { controller?.queue.map((id, index) => (<QueuedSong key={index} songid={id} pos={index}></QueuedSong>)) }
            { controller?.queue.length === 0 ? (noSongs) : null }

        </div>
)
}

function QueuedSong({songid, pos}: {songid: string, pos: number}) {
    const controller = useContext(AudioContext);
    const data = getMusicData(songid);

    const isActive = () => {
        return controller?.queuePos === pos;
    };

    const onClickQueued = () => {
        controller?.jumpQueue(pos);
    }

    return (
        <div className={`leading-none flex items-center `}> 
            <div className={`cursor-pointer p-1.5 hover:bg-zinc-200 grow ${isActive() ? "text-emerald-800 font-bold" : ""}`} onClick={onClickQueued}> {data["name"]} </div>
            <CustomButton scale highlight onClick={() => {controller?.dequeueSong(pos)}}> <Trash size={16}/> </CustomButton>
        </div>
    )
}