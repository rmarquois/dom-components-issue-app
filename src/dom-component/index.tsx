"use dom";

import { DOMProps } from "expo/dom";

export default function DOMComponent({
  tabName,
  onPress,
}: {
  tabName: string;
  onPress: (tabName: string) => void;
  dom?: DOMProps;
}) {
  return (
    <div>
      <h1>You are in {tabName} tab</h1>
      <button type="button" onClick={() => onPress(tabName)}>
        Click Me!
      </button>
    </div>
  );
}
