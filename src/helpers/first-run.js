import appData from "./app-data";

const firstRun = {

  appDataKey: "first-run",

  firstRunDone: function () {
    appData.write(this.appDataKey, 'shown')
  },

  isFirstRun: function () {
    return (appData.exists(this.appDataKey));
  }

};

export default firstRun
