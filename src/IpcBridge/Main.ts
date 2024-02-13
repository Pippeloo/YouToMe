import { ipcMain } from "electron";
import YouTubeDL from "../Classes/YouTubeDL";
import { handleYouTubeDL } from "../Interfaces/handleYouTubeDL";

const youTubeDL = new YouTubeDL();

ipcMain.handle("handleYouTubeDL", async (event, data: handleYouTubeDL) => {
  return await youTubeDL.getVideoInfo(data.url);
});
