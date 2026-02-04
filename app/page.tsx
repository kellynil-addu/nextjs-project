"use client";

import Image from "next/image";
import { AudioContext, AudioRef } from "@/components/audiocontext";
import { useContext, useEffect, useState } from "react";

export default function Home() {

  const audio = useContext<AudioRef>(AudioContext);

  let [playing, setPlaying] = useState(false);

  function audioExists(audio: AudioRef) {
    if (!audio) return false;
    if (!audio.current) return false;

    return true;
  }

  const playIt = () => {
    if (!audioExists(audio)) return;

    audio?.current?.play();
  }

  return (
    <>
        <div className="p-12">
            <h1 className="text-4xl font-bold">Welcome</h1>

                        
        </div>
    </>
  );
}
