// 初始化后的App对象所需要的运行时环境，包含了一些全局变量和方法，包含平台状态，注册插件等
import { getPlatformInfo } from "./platform"
import { registerAllModule } from "./module"
// import androidBridge from './bridge/android'
// import iosBridge from './bridge/ios'
// import webBridge from './bridge/web'

export const GlobalAppState = {
   currentPlatform: 'web'
 }

 /** 获取平台，加载平台对应资源
  * 注册模块通讯
  * 注册回调函数
  * @returns 
  */
export const createBotApp = () => {
   const { platform, features, version } = getPlatformInfo()
   console.log('platform', platform)
   GlobalAppState.platform = platform
   const bot = window.BOT || {}
   registerAllModule()
   return bot
}

export const initBotGlobal = () => (window.BOT = createBotApp())

