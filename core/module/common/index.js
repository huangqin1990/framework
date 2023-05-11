
const registerNativeModuleMap = new WeakMap()
const registerWebModuleMap = new WeakMap()

/**
 * 注册模块(域)
 * @param {*} scope 
 * @param {*} module { name，callbacks }   
 */
export const registerNativeModule = (scope, module) => {
    // registerModuleMap[scope] = module
    registerNativeModuleMap.set({ scope }, module)
}


export const registerWebModule = (scope, module) => {
    // registerWebModuleMap[scope] = module
    registerWebModuleMap.set({ scope }, module)
}


export const getNativeModule = scope => registerNativeModuleMap.get({ scope })

export const getWebModule = scope => registerWebModuleMap.get({ scope })

