import config from "./config"
import http from "http";

const server = {


  start: () => {
    const httpServer = http.createServer((req, res) => {
      res.end("done");
    });
    httpServer.listen(config.port, () => {
      console.log("Receiving server started on port: " + config.port);
    });
  }

};

export default server;
