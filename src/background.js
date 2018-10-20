import path from "path";
import url from "url";
import {app, Menu} from "electron";
import {devMenuTemplate} from "./menu/dev_menu_template";
import {aboutMenuTemplate, fileMenuTemplate} from "./menu/menu_templates";
import createWindow from "./helpers/window";

import env from "env";


const setApplicationMenu = () => {
  const menus = [fileMenuTemplate];
  if (env.name !== "production") {
    menus.push(devMenuTemplate);
  }
  menus.push(aboutMenuTemplate);
  Menu.setApplicationMenu(Menu.buildFromTemplate(menus));
};

if (env.name !== "production") {
  const userDataPath = app.getPath("userData");
  app.setPath("userData", `${userDataPath} (${env.name})`);
}

app.on("ready", () => {
  setApplicationMenu();

  const options = {};
  options.width = 1000;
  options.height = 600;

  const mainWindow = createWindow("main", options);

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "app.html"),
      protocol: "file:",
      slashes: true
    })
  );
});

app.on("window-all-closed", () => {
  app.quit();
});
