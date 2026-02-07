"use client";

import MusicCard from "@/components/musiccard";
import { listAllMusicIds } from "./musicstore";
import Link from "next/link";

export default function Home() {

  return (
    <>
        <div className="flex flex-col gap-6 p-12 relative">

            <h1 className="text-4xl font-bold">Welcome</h1>

            <div className="flex flex-wrap gap-4">
                {
                    listAllMusicIds().map(key => (
                        (<MusicCard key={key} musicid={key}></MusicCard>)
                    ))
                }
            </div>
            
            <h2 className="text-2xl font-semiold">Music Credits</h2>
            
            <span>
                This website features third-party material used under their respective licenses. <br/>
                 <Link className="text-blue-500" href="credits">Atrributions and license details can be seen here</Link>.
            </span>
        </div>
    </>
  );
}
