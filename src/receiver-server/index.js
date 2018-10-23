import server from "./server";
import os from "os";

//TODO determine the local network ip i.e LAN IP
let networkIP = '127.0.0.1';

const networkInterfaces = os.networkInterfaces();
//console.log(networkInterfaces);

if (networkInterfaces.hasOwnProperty("lo")) {
  delete networkInterfaces.lo;
}

let noConnectedNetwork = true;

let networkAddresses = [];

Object.keys(networkInterfaces).forEach((key) => {

  let networkInterface = networkInterfaces[key];
  for (let i = 0; i < networkInterface.length; i++) {

    let nInterface = networkInterface[i];

    if (!nInterface.internal && nInterface.family === "IPv4") {
      networkAddresses.push(nInterface.address);
      noConnectedNetwork = false;
    }
  }

});
//console.log(networkAddresses);
if (!(networkAddresses.length > 0 && !noConnectedNetwork)) {
  //TODO Start a Wi-Fi hotspot if Wi-Fi hardware is available.
}

//TODO change firewall setings to allow access to port config.port.

const receiverServer = {
  start: () => {
    for (let i = 0; i < networkAddresses.length; i++) {
      server.start(networkAddresses[i]);
    }
  }
};

export default receiverServer;
