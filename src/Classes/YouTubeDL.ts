import ytdl from "ytdl-core";

export default class YouTubeDL {
  constructor() {
    console.log("YouTubeDL class instantiated");
  }

  async getVideoInfo(url: string) {
    const info = await ytdl.getInfo(url);
    return info;
  }
}
