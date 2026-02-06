"use client";

import { listAllMusicIds } from "@/app/musicstore";
import MusicCard from "@/components/musiccard";

export default function MusicGrid() {

  return (
    <div className="flex flex-wrap gap-4">
        {
            listAllMusicIds().map(key => (
                (<MusicCard key={key} musicid={key}></MusicCard>)
            ))
        }
    </div>
  );
}
