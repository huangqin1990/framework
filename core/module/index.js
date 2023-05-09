
const registerMap = { }
// 注册模块
export const registerModule = (name, module) => {
    registerMap[name] = module
}

export const getModule = name => registerMap[name]

export const removeModule = name => delete registerMap[name]
