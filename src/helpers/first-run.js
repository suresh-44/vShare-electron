import index from "../app-data";

const appDataKey = "firstRun";

const firstRun = {

  firstRunDone: () => {
    index.write(appDataKey, 'shown')
  },

  isFirstRun: () => {
    return !(index.exists(appDataKey));
  }

};

export default firstRun;
