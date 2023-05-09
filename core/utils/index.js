// 工具函数类，包含日志处理类

const handleError = error => window.console.error('error', error)

/**
 * 判断类型
 * @param {*} type 
 * @returns 
 */
export const typeIs = type => target => `[object ${type}]` === Object.prototype.toString.call(target)

/**
 * 类型集合
 */
export const isObject = isType('Object')
export const isString = isType('String')
export const isFunction = isType('Function')
export const isNumber = isType('Number')
export const isBoolean = isType('Boolean')
export const isArray = isType('Array')
export const isUndefined = isType('Undefined')
export const isNull = isType('Null')
export const isSymbol = isType('Symbol')
export const isDate = isType('Date')
export const isRegExp = isType('RegExp')
export const isPromise = isType('Promise')

// 非空对象
export const isNotEmptyObject = target => isObject(target) && Reflect.ownKeys(target).length > 0