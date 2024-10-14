import {Injectable} from "@angular/core";
import {Capacitor } from "@capacitor/core";
import {pluginName, WatchOsStatus, SubscribeToValueCallback, CallbackID} from "./types"
import {watchOSPlugin} from "./WatchOSPlugin";

@Injectable({
  providedIn: 'root',
})
export class WatchOSPluginSevice {


  async getState(): Promise<WatchOsStatus> {
    if (!Capacitor.isPluginAvailable(pluginName)) {
      return WatchOsStatus.NotSupported;
    }
    const result = await watchOSPlugin.getState();
    return result ? result.status : WatchOsStatus.CommunicationProblem;
  }

  async subscribe(
    callback: SubscribeToValueCallback
  ): Promise<CallbackID | null> {
    if (Capacitor.isPluginAvailable(pluginName)) {
      return await watchOSPlugin.subscribe(callback);
    }
    return null;
  }

  async setValue(data: { value: string }): Promise<void> {
    if (Capacitor.isPluginAvailable(pluginName)) {
      await watchOSPlugin.setValue(data);
    }
  }
}
