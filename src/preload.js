import "./stylesheets/main.css";
import "./helpers/context_menu.js";
import "./helpers/external_links.js";
import { remote } from "electron";
import firstRun from "./helpers/first-run";
import "./secure";
import url from "url";
import path from "path";

const app = remote.app;
const currentWindow = remote.getCurrentWindow();

console.log("starting preload.js");

const firstCheck = () => {
  console.log("Checking if app is running for first time");
  if(firstRun.isFirstRun()){
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

document.addEventListener("load", firstCheck);
document.getElementById('a').onclick = () => {document.getElementById('a').innerHTML = 'success'};
