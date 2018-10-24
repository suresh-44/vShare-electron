//import {remote} from "electron"
import openAboutWindow from "about-window";

export const fileMenuTemplate = {
  label: "File",
  submenu: [
    {
      label: "Send",
      accelerator: "Alt+Ctrl+S",
      click: () => {

      }
    },
    {
      label: "Receive",
      accelerator: "Alt+Ctrl+R",
      click: () => {

      }
    },
    {
      label: "Settings",
      accelerator: "Alt+Shift+S",
      click: () => {

      }
    },
    {
      label: "Exit",
      accelerator: "Alt+Ctrl+Q",
      click: () => {

      }
    }
  ]
};

export const aboutMenuTemplate = {
  label: "About",
  submenu: [
    {
      label: "About",
      click: () => {
        openAboutWindow({
          icon_path: './../../resources/icon.png',
          copyright: 'Copyright (c) 2018 vShare',
          package_json_dir: './../../'
        })
      }
    },
    {
      label: "Help",
      accelerator: "F1",
      click: () => {

      }
    }
  ]
};
