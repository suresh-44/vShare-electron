import server from "./server";

//TODO determine the local network ip i.e LAN IP
const networkIP = '127.0.0.1';

const receiverServer = {
  start: () => {
    server.start(networkIP);
  }
};

export default receiverServer;
