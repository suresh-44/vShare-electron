import appData from "./app-data";

const firstRun = {

  appDataKey: "first-run",

  firstRunDone: () => {
    appData.write(this.appDataKey, 'shown')
  },

  isFirstRun: () => {
    return !(appData.exists(this.appDataKey));
  }

};

export default firstRun;
