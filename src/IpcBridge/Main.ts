import { ipcMain } from "electron";
import YouTubeDL from "../Classes/YouTubeDL";
import { handleYouTubeDL } from "../Interfaces/handleYouTubeDL";

const youTubeDL = new YouTubeDL();

ipcMain.handle("handleYouTubeDL", async (event, data: handleYouTubeDL) => {
  if (data.func === "downloadAudio") {
    return await youTubeDL.downloadAudio(data.url, data.mediaType);
  } else if (data.func === "downloadVideo") {
    return await youTubeDL.downloadVideo(data.url, data.mediaType);
  }
});
