"use client";

import Image from "next/image";
import { AudioContext, AudioRef } from "@/components/audiocontext";
import { useContext, useEffect, useState } from "react";
import useAudioController from "@/components/audiocontroller";
import MusicCard from "@/components/musiccard";
import { List } from "lucide-react";

const musicList = require("@/app/musiclist.json");

function listCards() {
    return Object.keys(musicList).map((key) => {
        (
            <MusicCard musicid={key}></MusicCard>
        )
    })
}

export default function Home() {

  const audio = useContext(AudioContext);

  useEffect(() => {

  }, [])

  return (
    <>
        <div className="flex flex-col gap-6 p-12">
            <h1 className="text-4xl font-bold">Welcome</h1>

            <div className="flex flex-wrap gap-4">
                {/* <MusicCard musicid="allaturca"></MusicCard> */}
                {
                    Object.keys(musicList).map(key => (
                        (<MusicCard key={key} musicid={key}></MusicCard>)
                    ))
                }
            </div>
        </div>
    </>
  );
}
