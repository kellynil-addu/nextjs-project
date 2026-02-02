import Image from "next/image";
import { AudioContext } from "@/components/audiocontext";

export default function Home() {
  return (
    <>
        <div className="p-12">
            <h1 className="text-4xl font-bold">Welcome</h1>
            
            {AudioContext.current?.paused}
        </div>
    </>
  );
}
