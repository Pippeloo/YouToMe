import ytdl from "ytdl-core";
import fs from "fs";

export default class YouTubeDL {
  private downloader: any;

  constructor() {
    console.log("YouTubeDL class instantiated");
  }

  async getVideoInfo(url: string) {
    const info = await ytdl.getInfo(url);
    return info;
  }

  async downloadAudio(url: string, mediaType: string) {
    this.downloader = ytdl(url, { filter: "audioonly" });
    this.downloader.pipe(
      fs.createWriteStream(`./downloads/music.${mediaType}`)
    );
    return "Download started";
  }

  async downloadVideo(url: string, mediaType: string) {
    this.downloader = ytdl(url);
    this.downloader.pipe(
      fs.createWriteStream(`./downloads/video.${mediaType}`)
    );
    return "Download started";
  }
}
