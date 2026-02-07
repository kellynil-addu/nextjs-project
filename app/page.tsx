"use client";

import MusicCard from "@/components/musiccard";
import { listAllMusicIds } from "./musicstore";

export default function Home() {

  return (
    <>
        <div className="flex flex-col gap-6 p-12 min-h-full relative bg-[url('/background.jpg')] bg-cover">

            <h1 className="text-4xl font-bold">Welcome</h1>

            <div className="flex flex-wrap gap-4">
                {
                    listAllMusicIds().map(key => (
                        (<MusicCard key={key} musicid={key}></MusicCard>)
                    ))
                }
            </div>
        </div>
    </>
  );
}
