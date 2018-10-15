import {expect} from "chai";
import appData from "./../helpers/app-data";

describe("AppData tests", () => {

  it('AppData write ', () => {
    appData.write("test", "success");
  });

  it('AppData get ', () => {
    let val = appData.get('test');
    expect(val).to.equal('success');
  });

  it('AppData modify ', () => {
    appData.modify('test', 'done').then(res => {
      let val = appData.get('test');
      expect(val).to.equal('done');
    }).catch(err => {
      expect.fail(err);
    });
  });

  it('deletes and checks existence', function () {
    appData.remove('test').then(res => {
      expect(appData.exists('test')).to.equal('false');
    }).catch(err => {
      expect.fail(err);
    });
  });

});
