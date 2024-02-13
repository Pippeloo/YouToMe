import { ipcMain } from "electron";
import YouTubeDL from "../Classes/YouTubeDL";

ipcMain.handle("createYouTubeDL", async (event, args) => {
  const ytdl = new YouTubeDL();
  return ytdl;
});

console.log("Main.ts loaded");
