import {appData, keys} from "../libs/app-data";

const appDataKey = keys.firstRun;

const firstRun = {

  firstRunDone: () => {
    appData.write(appDataKey, 'shown')
  },

  isFirstRun: () => {
    return !(appData.exists(appDataKey));
  }

};

export default firstRun;
