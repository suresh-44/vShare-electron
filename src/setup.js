import os from "os";
import firstRun from "./helpers/first-run";
import {appData, keys} from "./libs/app-data";
import "./secure";

const finishSetup = () => {

  let x = document.getElementById("username").value;
  appData.write(keys.username, x);

  x = os.platform();
  appData.write(keys.platform, x);

  x = os.arch();
  appData.write(keys.arch, x);

  x = os.type();
  appData.write(keys.osType, x);

  navigator.getBattery().then((battery) => {

    if (battery.charging && battery.chargingTime === 0) {
      //console.log("I'm a desktop")
      appData.write(keys.deviceType, "DESKTOP");

    } else {
      //console.log("I'm not a desktop")
      appData.write(keys.deviceType, "LAPTOP");
    }
  });

};

document.getElementById("finish").onclick = () => {
  finishSetup();
  firstRun.firstRunDone();
};
