import DOMComponent from "@/dom-component";

export default function TabsIndex() {
  return (
    <DOMComponent
      tabName="index"
      onPress={(tabName) => alert(`Button pressed from ${tabName} tab`)}
      dom={{
        webviewDebuggingEnabled: true,
      }}
    />
  );
}
