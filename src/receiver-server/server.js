import http from "http";
import url from "url";
import {StringDecoder} from "string_decoder";
import config from "./config";
import routes from "./routes";
import handlers from "./handlers";

const httpServer = http.createServer((req, res) => {

  res.setHeader("Content-Type', 'application/json");

  let parsedUrl = url.parse(req.url, true);
  let path = parsedUrl.pathname;
  let trimmedPath = path.replace(/^\/+|\/+$/g, "");
  let method = req.method.toLowerCase();

  const decoder = new StringDecoder();

  let buffer = "";
  req.on("data", (data) => {
    buffer += decoder.write(data);
  });

  req.on("end", () => {
    buffer += decoder.end();
    const payload = buffer;
    const headers = req.headers;

    const handler = routes[trimmedPath] || handlers.notFound;

    const data = {
      url: parsedUrl,
      path,
      method,
      headers,
      payload
    };

    const callback = (statusCode, payload) => {
      res.writeHead(statusCode);
      res.end(JSON.stringify(payload || {}));
    };

    handler(data, callback);
  });
});

const server = {

  start: () => {
    httpServer.listen(config.port, () => {
      console.log("Receiving server started on port: " + config.port);
    });
  }

};

export default server;
