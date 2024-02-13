import { createRoot } from "react-dom/client";
const { ipcRenderer } = require("electron");

const App = () => {
  let ytdl: any;
  ipcRenderer.invoke("createYouTubeDL").then((result) => {
    ytdl = result;
    console.log(ytdl.hello());
  });
  return <h2 className="text-center">YouToMe</h2>;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
