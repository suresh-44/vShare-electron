import firstRun from "./helpers/first-run";
import {appData, keys} from "./app-data";
import "./secure";

document.getElementById("finish").onclick = () => {
  let username = document.getElementById("username").value;
  appData.write(keys.username, username);
  firstRun.firstRunDone();
};
