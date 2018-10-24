import server from "./server";
import config from "./config";
import firewall from "./../libs/firewall";
import {getNetworkIPs} from "./../helpers/networkHelpers";

let networkAddresses = [];
networkAddresses = getNetworkIPs();

if (networkAddresses.length === 0) {

  //TODO Start a Wi-Fi hotspot if Wi-Fi hardware is available.
  //push the network IP address to the networkAddresses array.
}

firewall.allowIncoming(config.port);

const receiverServer = {
  start: () => {
    for (let i = 0; i < networkAddresses.length; i++) {
      server.start(networkAddresses[i]);
    }
  }
};

export default receiverServer;
