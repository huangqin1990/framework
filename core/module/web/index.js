import { registerWebModule } from "../common";
import Network from "./network";

export const registerAllWebModule = () => {
    console.log('注册web模块')
    registerWebModule('Network', Network)
}