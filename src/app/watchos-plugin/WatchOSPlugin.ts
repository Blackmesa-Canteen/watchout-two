import {registerPlugin} from "@capacitor/core";
import {pluginName, WatchOSPlugin} from "./types";

const watchOSPlugin: WatchOSPlugin = registerPlugin<WatchOSPlugin>(pluginName);
export {watchOSPlugin};
