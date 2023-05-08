// 初始化后的App对象所需要的运行时环境，包含了一些全局变量和方法，包含平台状态，注册插件等
import { getPlatformInfo } from "./platform"
import androidBridge from './bridge/android'
import iosBridge from './bridge/ios'
import webBridge from './bridge/web'

export const GlobalAppState = {
   currentPlatform: 'web'
 }

export const createBotApp = () => {
   const { platform, features, version } = getPlatformInfo()
   console.log('platform', platform)
   GlobalAppState.platform = platform
}
