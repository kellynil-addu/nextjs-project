"use client";

import { listAllMusicIds } from "@/app/_components/musicstore";
import MusicCard from "@/src/components/musiccard";

// Loads MusicCard's into view.
// Loads MusicCard's into view.
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
