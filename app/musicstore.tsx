const musiclist = require("@/app/musiclist.json")

const keys = Object.keys(musiclist);

export function getMusicData(songid: string) {
    const object = musiclist[songid];
    object["id"] = songid;
    return object;
}

export function listAllMusicIds() {
    return keys
}