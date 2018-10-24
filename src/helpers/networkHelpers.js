import os from "os";


export const getNetworkIPs = () => {

  const networkInterfaces = os.networkInterfaces();

  if (networkInterfaces.hasOwnProperty("lo")) {
    delete networkInterfaces.lo;
  }

  let networkAddresses = [];

  Object.keys(networkInterfaces).forEach((key) => {
    let networkInterface = networkInterfaces[key];
    for (let i = 0; i < networkInterface.length; i++) {
      let nInterface = networkInterface[i];
      if (!nInterface.internal && nInterface.family === "IPv4") {
        networkAddresses.push(nInterface.address);
      }
    }
  });
  return networkAddresses;
};
