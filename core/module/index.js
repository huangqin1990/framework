
const registerModuleMap = { }

/**
 * 注册模块(域)
 * @param {*} scope 
 * @param {*} module { name，callbacks }   
 */
export const registerModule = (scope, module) => {
    registerModuleMap[scope] = module
}

export const getModule = scope => registerModuleMap[scope]

export const removeModule = scope => delete registerModuleMap[scope]
