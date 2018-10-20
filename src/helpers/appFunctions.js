import firstRun from "./first-run";
import url from "url";
import path from "path";
import receiveServer from "../receiver-server";
import {remote} from "electron";

const currentWindow = remote.getCurrentWindow();

export const firstCheck = () => {
  console.log("Checking if app is running for first time");
  if (firstRun.isFirstRun()) {
    console.log("......App is running for first time");

    currentWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "intro.html"),
        protocol: "file:",
        slashes: true
      })
    );
  }
};

export const startReceiveMode = () => {
  receiveServer.start();
};

export const startSendMode = () => {

};
