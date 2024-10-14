export type CallbackID = string;

export enum WatchOsStatus {
  OK = 0,
  NotSupported = 1,
  NotReachable = 2,
  NotPaired = 3,
  CommunicationProblem = 4,
  ActivationFailure = 5,
  WatchAppNotInstalled = 6,
}

export type SubscribeToValueCallback = (
  message: { value: string } | null,
  err?: any
) => void;

export const pluginName: string = 'WatchOSPlugin';

export interface MyData {
  data: string;
}

export interface WatchOSPlugin {
  getState(): Promise<{
    status: WatchOsStatus;
  }>;

  subscribe(callback: SubscribeToValueCallback): Promise<CallbackID>;

  setValue(data: { value: string }): Promise<void>;
}
