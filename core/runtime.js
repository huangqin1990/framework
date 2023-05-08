// 初始化后的App对象所需要的运行时环境，包含了一些全局变量和方法，包含平台状态，注册插件等
import { getPlatformInfo } from "./platform"

const GlobalAppState = new Map()

export const createBotApp = () => {
   const { platform, features, version } = getPlatformInfo()
   console.log('platform', platform, features, version)
   // const isReady = () => {
   //    const iosReady = platform === 'ios' && version >=1 && /mixPMPrompt|usePostMessage/.test(features)
   //    return iosReady() && window?.webkit?.messageHandlers?.BOTbridge
   // }
}
