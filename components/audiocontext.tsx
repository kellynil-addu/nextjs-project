"use client";

import { ReactNode, RefObject, createContext, useRef } from "react";

export type AudioRef = RefObject<HTMLAudioElement | null> | null

type MusicContextProps = {
	children: ReactNode;
	audio: RefObject<HTMLAudioElement | null>;
}

// FIXME: ??????
export const AudioContext = createContext<AudioRef>(null);

export default function AudioProvider({children, audio}: MusicContextProps) {
	return (
		<AudioContext.Provider value={audio}>
			{children}
		</AudioContext.Provider>
	);
}