declare module "react-native-twilio-programmable-voice" {
  export interface TwilioParam {
    call_sid?: string;
    call_state?: "PENDING" | "CONNECTED" | "ACCEPTED" | "CONNECTING" | "DISCONNECTED" | "CANCELLED";
    error?: string;
    call_from?: string;
    call_to?: string;
    from?: string;
    to?: string;
  }

  /*async*/ function initWithToken(token: string): Promise<{ initialized: boolean }>;

  function initWithTokenUrl(url: string);
  function connect(params: { To: string });
  function disconnect();
  function setMuted(isMuted: boolean);
  function setSpeakerPhone(value: boolean);
  function sendDigits(digits: number);
  function requestPermissions(senderId: string);
  function getActiveCall(): Promise<TwilioParam>;

  // Android only
  function accept();
  function reject();
  function ignore();

  // iOS only
  function configureCallKit(params: { appName: string; imageName?: string; ringtoneSound?: string });
  function unregister();

  function addEventListener(
    type:
      | "deviceReady"
      | "deviceNotReady"
      | "connectionDidConnect"
      | "connectionDidDisconnect"
      // iOS
      | "callRejected"
      // Android
      | "deviceDidReceiveIncoming"
      | "proximity"
      | "wiredHeadset",
    handler: (data?: any) => void
  );

  function removeEventLisner(
    type:
      | "deviceReady"
      | "deviceNotReady"
      | "connectionDidConnect"
      | "connectionDidDisconnect"
      // iOS
      | "callRejected"
      // Android
      | "deviceDidReceiveIncoming"
      | "proximity"
      | "wiredHeadset",
    handler: (data?: any) => void
  );
}
