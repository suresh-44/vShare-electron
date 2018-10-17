import {session} from "electron";

session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
  callback({responseHeaders: `default-src 'none'`})
});


window.eval = global.eval = function () {
  throw new Error(`Sorry, this app does not support window.eval().`)
};
