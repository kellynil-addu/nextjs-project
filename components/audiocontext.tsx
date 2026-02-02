"use client";

import { ReactNode, RefObject, createContext, useRef } from "react";

type MusicContextProps = {
	children: ReactNode;
	audio: RefObject<HTMLAudioElement | null>;
}

// FIXME: ??????
export const AudioContext = createContext();

export default function AudioProvider({children, audio}: MusicContextProps) {
	return (
		<AudioContext.Provider value={audio}>
			{children}
		</AudioContext.Provider>
	);
}