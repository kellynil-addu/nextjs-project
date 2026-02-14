"use client";

import { ReactNode, RefObject, createContext, useRef } from "react";
import useAudioController from "./audiocontroller";

export type AudioRef = RefObject<HTMLAudioElement | null> | null

type MusicContextProps = {
	children: ReactNode;
	audio: RefObject<HTMLAudioElement | null>;
}

export const AudioContext = createContext<ReturnType<typeof useAudioController> | undefined>(undefined);

export default function AudioProvider({children, audio}: MusicContextProps) {
	return (
		<AudioContext.Provider value={useAudioController(audio)}>
			{children}
		</AudioContext.Provider>
	);
}