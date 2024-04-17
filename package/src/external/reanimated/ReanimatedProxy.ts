import type * as ReanimatedT from "react-native-reanimated";

import { createModuleProxy } from "../ModuleProxy";
type TReanimated = typeof ReanimatedT;

export let HAS_REANIMATED2 = false;
export let HAS_REANIMATED3 = false;
try {
  require("react-native-reanimated");
  HAS_REANIMATED2 = true;
  const reanimatedVersion =
    require("react-native-reanimated/package.json").version;
  if (
    reanimatedVersion &&
    (reanimatedVersion >= "3.0.0" || reanimatedVersion.includes("3.0.0-"))
  ) {
    HAS_REANIMATED3 = true;
  }
} catch (e) {
  HAS_REANIMATED2 = false;
}

export function throwOnMissingReanimated() {
  if (!HAS_REANIMATED2) {
    throw new Error(
      "Reanimated was not found, make sure react-native-reanimated package is installed if you want to use \
      react-native-skia's integration layer API."
    );
  }
}

export const Reanimated = createModuleProxy<TReanimated>(
  "react-native-reanimated",
  () => {
    return require("react-native-reanimated");
  }
);
