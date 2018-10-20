import {expect} from "chai";
import index from "../app-data/index";

describe("AppData tests", () => {

  it("AppData write ", () => {
    index.write("test", "success");
  });

  it("AppData get ", () => {
    let val = index.get("test");
    expect(val).to.equal("success");
  });

  it("AppData modify ", () => {
    index.modify("test", "done").then(res => {
      let val = index.get("test");
      expect(val).to.equal("done");
    }).catch(err => {
      expect.fail(err);
    });
  });

  it("deletes and checks existence", () => {
    index.remove("test").then(res => {
      expect(index.exists("test")).to.equal("false");
    }).catch(err => {
      expect.fail(err);
    });
  });

});
