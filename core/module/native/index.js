import Camera from "./camera"
import { registerNativeModule } from "../common"

/**
 * 注册模块(域)
 * 如果只有原生模块实现，那么就不需要注册web模块
 */
export const registerAllNativeModule = () => { 
    console.log('注册原生模块')
    registerNativeModule('Camera', Camera)
}
