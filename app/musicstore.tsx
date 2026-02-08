const musiclist = require("@/app/musiclist.json")

const keys = Object.keys(musiclist);

export function getMusicData(songid: string) {
    const object = musiclist[songid];

    // Return a not found object instead
    if (!object) {
        return {
            id: "",
            name: "",
            song: "Song"
        }
    }

    object["id"] = songid;
    return object;
}

export function listAllMusicIds() {
    return keys
}