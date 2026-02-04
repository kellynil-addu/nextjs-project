import CustomButton from "./custombutton";

export default function MusicCard({musicid}: {musicid: string}) {
    
    // const 

    
    return (
        <div className="bg-gray-200 p-4 rounded-2xl flex-1 max-w-64 shadow-md">
            {musicid}
            <br></br>

            <CustomButton scale>
                <div className="bg-gray-300 p-0.5 rounded">Play</div>
            </CustomButton>
        </div>
    )
}