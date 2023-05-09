// 包含注册callBack等
import { v4 as uuidv4 } from 'uuid'
import { GlobalAppState } from '../runtime'
import { isString } from '../../utils'

/**
 * 
 * @returns String 默认基础方法名
 */
const defaultCallBackName = () => `__cb_${uuidv4().replace(/-/g, '')}`

/**
 * 
 * @param {*} scope 模块域
 * @returns  创建模块域下唯一的回调函数名
 */
export const createCallBackName = scope => {
    const defaultName = defaultCallBackName()
    const scopeLength = 12
    return defaultName.substring(0,5) + scope.substring(0, scopeLength) + '_' + defaultName.substring(defaultName.length - 5 - scopeLength - 1);
}

/**
 * 注册回调函数
 * @param {*} param0 函数体
 * @param {*} name 函数名
 */
export const registerCallback = (name, {success, fail, complete}) => {
    const registerMap = { };
    !name && (name = defaultCallBackName())
    registerMap[name] = {success, fail, complete} 
}

/**
 * 同步调用原生方法:native端会拦截prompt方法，然后执行对应的方法返回结果
 * @param {*} methodName 调用的方法名
 * @param {*} scope 域
 * @returns Object || null 
 */
export const syncCallNativeMethod = (methodName, scope = 'BOTbridge') => () => {
    let nativeResponse = null
    const payload = { type: scope, functionName: methodName, arguments: Array.prototype.slice.call(arguments) }
    const res = window.prompt(JSON.stringify(payload))
    isString(res) && (nativeResponse = JSON.parse(res))
    Array.isArray(res) && (nativeResponse = res[0])
    return nativeResponse
}



