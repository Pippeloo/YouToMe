import { createRoot } from "react-dom/client";
const { ipcRenderer } = window.require("electron");

const App = () => {
  ipcRenderer
    .invoke("handleYouTubeDL", {
      func: "getVideoInfo",
      url: "https://www.youtube.com/watch?v=6y3B5VUjm7k",
    })
    .then((result: any) => {
      console.log(result);
    });
  return <h2 className="text-center">YouToMe</h2>;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
