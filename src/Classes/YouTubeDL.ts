import ytdl from "ytdl-core";
import fs from "fs";

export default class YouTubeDL {
  constructor() {
    console.log("YouTubeDL class instantiated");
  }

  async getVideoInfo(url: string) {
    const info = await ytdl.getInfo(url);
    return info;
  }

  hello() {
    console.log("Hello from YouTubeDL class");
  }
}
