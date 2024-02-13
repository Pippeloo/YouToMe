const { ipcRenderer } = window.require("electron");
import React, { useState } from "react";

function Main() {
  const [mediaType, setMediaType] = useState("mp3");
  const [youtubeLink, setYoutubeLink] = useState("");

  const handleDownload = async () => {
    let downloadFunc = mediaType === "mp3" ? "downloadAudio" : "downloadVideo";

    console.log(
      await ipcRenderer.invoke("handleYouTubeDL", {
        func: downloadFunc,
        url: youtubeLink,
        mediaType: mediaType,
      })
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-96 p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">YouToMe</h1>
        <div className="mb-4">
          <label htmlFor="mediaType" className="block mb-2">
            Select Media Type:
          </label>
          <select
            id="mediaType"
            value={mediaType}
            onChange={(e) => setMediaType(e.target.value)}
            className="w-full py-2 px-3 bg-gray-700 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="mp3">MP3</option>
            <option value="mp4">MP4</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="youtubeLink" className="block mb-2">
            YouTube Link:
          </label>
          <input
            type="text"
            id="youtubeLink"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            placeholder="Enter YouTube link"
            className="w-full py-2 px-3 bg-gray-700 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          onClick={handleDownload}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default Main;
