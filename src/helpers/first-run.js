const fs = require('fs');

const firstRun = {

  firstFileName: "first.run",

  firstRunDone: function () {
    fs.writeFile(this.firstFileName, "done", err => {
      if (err) throw err;
    })
  },

  isFirstRun: function () {
    try {
      fs.accessSync(this.firstFileName, fs.constants.F_OK);
      return true;
    } catch (e) {
      return false;
    }
  }

};

module.exports = firstRun;
