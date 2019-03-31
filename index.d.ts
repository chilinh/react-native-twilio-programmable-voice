declare module "react-native-twilio-programmable-voice" {
  export interface TwilioParam {
    call_sid?: string;
    call_state?:
      | "PENDING"
      | "CONNECTED"
      | "ACCEPTED"
      | "CONNECTING"
      | "DISCONNECTED"
      | "CANCELLED";
    error?: string;
    call_from?: string;
    call_to?: string;
  }

  /*async*/ function initWithToken(
    token: string
  ): Promise<{ initialized: boolean }>;

  function initWithTokenUrl(url: string): void;
  function connect(params: { To: string }): void;
  function disconnect(): void;
  function setMuted(isMuted: boolean): void;
  function setSpeakerPhone(value: boolean): void;
  function sendDigits(digits: number): void;
  function requestPermissions(senderId: string): void;
  function getActiveCall(): Promise<TwilioParam>;

  // Android only
  function accept(): void;
  function reject(): void;
  function ignore(): void;

  // iOS only
  function configureCallKit(params: {
    appName: string;
    imageName?: string;
    ringtoneSound?: string;
  });
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

  function removeEventListener(
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
