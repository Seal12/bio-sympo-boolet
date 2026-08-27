/**
 * Build a Wi-Fi QR payload per ZXing Wi-Fi network config format.
 * @see https://github.com/zxing/zxing/wiki/Barcode-Contents#wi-fi-network-config-android-ios-11
 */
export function escapeWifiQrField(value: string): string {
  return value.replace(/([\\;,"])/g, "\\$1");
}

export function buildWifiQrPayload(
  ssid: string,
  password: string,
  hidden = false,
): string {
  const escapedSsid = escapeWifiQrField(ssid);
  const escapedPassword = escapeWifiQrField(password);
  return `WIFI:T:WPA;S:${escapedSsid};P:${escapedPassword};H:${hidden ? "true" : "false"};;`;
}
