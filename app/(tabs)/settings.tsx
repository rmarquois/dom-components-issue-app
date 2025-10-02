import DOMComponent from "@/dom-component";

export default function TabsSettings() {
  return (
    <DOMComponent
      tabName="settings"
      onPress={(tabName) => alert(`Button pressed from ${tabName} tab`)}
      dom={{
        webviewDebuggingEnabled: true,
      }}
    />
  );
}
