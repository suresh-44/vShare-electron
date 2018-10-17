import "./stylesheets/main.css";
// Small helpers you might want to keep
import "./helpers/context_menu.js";
import "./helpers/external_links.js";
import {remote} from "electron";
import jetpack from "fs-jetpack";
import "./secure";

// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

const app = remote.app;
const currentWindow = remote.getCurrentWindow();
const appDir = jetpack.cwd(app.getAppPath());
