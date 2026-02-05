const musiclist = require("@/app/musiclist.json")

export function getMusicData(songid: string) {
    return musiclist[songid];
}