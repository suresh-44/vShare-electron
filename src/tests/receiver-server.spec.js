import {expect} from "chai";
import receiverServer from "../libs/receiver-server";

describe("Receive server tests", () => {

  it("Server starts", () => {
    receiverServer.start();
  });
  
});
