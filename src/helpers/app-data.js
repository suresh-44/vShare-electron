import fs from "fs";
import jsonFile from "jsonfile";
import {remote} from "electron";

const app = remote.app;
const userDataPath = app.getPath("userData");
const appDataFile = userDataPath + "/app-data.json";

const appData = {

  write: (key, value) => {
    try {

      fs.accessSync(appDataFile, fs.constants.F_OK);
      let json = jsonFile.readFileSync(appDataFile);
      json[key] = value;
      return jsonFile.writeFile(appDataFile, json);

    } catch (e) {

      let obj = {};
      obj[key] = value;
      return jsonFile.writeFile(appDataFile, obj);

    }

  },

  get: (key) => {

    let json = jsonFile.readFileSync(appDataFile);
    return json[key];
  },

  modify: (key, value) => {
    let json = jsonFile.readFileSync(appDataFile);
    json[key] = value;
    return jsonFile.writeFile(appDataFile, json);
  },

  exists: (key) => {
    let json = jsonFile.readFileSync(appDataFile);
    return (key in json);
  },

  remove: (key) => {
    let json = jsonFile.readFileSync(appDataFile);
    delete json[key];
    return jsonFile.writeFile(appDataFile, json);
  }

};

export default appData;
