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

class NativeModule {
    modules = new WeakMap()
    constructor() {}
    registerNativeModule(scope, module) {
        this.modules.set({ scope }, module)
    }
    invokeNativeModule(scope, method, args) {
        const module = this.modules.get({ scope })
        if (module) {
            const fn = module[method]
            if (fn) {
                console.log(module, args, '执行上下文')
                fn.apply(module, args)
            } else {
                console.warn(`Module ${scope} does not implement method ${method}`)
            }
        } else {
            console.warn(`Module ${scope} is not registered`)
        }
    }

}

export default new NativeModule()