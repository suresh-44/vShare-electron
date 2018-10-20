import firstRun from "./helpers/first-run";
import index from "./app-data";
import "./secure";

document.getElementById("finish").onclick = () => {
  let username = document.getElementById("username").value;
  index.write("username", username);
  firstRun.firstRunDone();
};
