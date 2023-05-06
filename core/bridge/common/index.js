// 包含注册callBack等
import { v4 as uuidv4 } from 'uuid'

const defaultCallBackName = () => `__cb_${uuidv4().replace(/-/g, '')}`

export const regiterCallback = ({success, fail, complete}, name) => {
    const registerMap = new Map();
    !name && (name = defaultCallBackName())
    registerMap.set(name, {success, fail, complete})
}