import { registerAllNativeModule } from "./native";
import { registerAllWebModule } from "./web";
import { getPlatformInfo } from "../platform";

export const registerAllModule = () => {
    getPlatformInfo().platform === 'web' ? registerAllWebModule() : registerAllNativeModule()
}