import appData from "./app-data";

const appDataKey = "firstRun";

const firstRun = {

  firstRunDone: () => {
    appData.write(appDataKey, 'shown')
  },

  isFirstRun: () => {
    return !(appData.exists(appDataKey));
  }

};

export default firstRun;
