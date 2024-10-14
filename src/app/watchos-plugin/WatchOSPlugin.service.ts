import {Injectable} from "@angular/core";
import {Capacitor, registerPlugin} from "@capacitor/core";
import {WatchOSPlugin, pluginName, WatchOsStatus, SubscribeToValueCallback, CallbackID} from "./types"

const WatchOSPlugin = registerPlugin<WatchOSPlugin>(pluginName);

@Injectable({
  providedIn: 'root',
})
export class WatchOSPluginSevice {


  async getState(): Promise<WatchOsStatus> {
    if (!Capacitor.isPluginAvailable(pluginName)) {
      return WatchOsStatus.NotSupported;
    }
    const result = await WatchOSPlugin.getState();
    return result ? result.status : WatchOsStatus.CommunicationProblem;
  }

  async subscribe(
    callback: SubscribeToValueCallback
  ): Promise<CallbackID | null> {
    if (Capacitor.isPluginAvailable(pluginName)) {
      return await WatchOSPlugin.subscribe(callback);
    }
    return null;
  }

  async setValue(data: { value: string }): Promise<void> {
    if (Capacitor.isPluginAvailable(pluginName)) {
      await WatchOSPlugin.setValue(data);
    }
  }
}
