/*! BotimFramework: https://botim.com/ - MIT License */
var agentRegExp = /(iOS|Android)MPAdapter\/(\d+(\.?\d*))(\(.*\)|\/.*)?/;
var getPlatformInfo = function getPlatformInfo() {
  var platformInfo = {};
  var execAgent = agentRegExp.exec(navigator.userAgent);
  platformInfo.platform = execAgent ? execAgent[1].toLowerCase() : 'web';
  platformInfo.version = execAgent ? execAgent[2] : -1;
  platformInfo.features = execAgent ? execAgent[4] : '';
  return platformInfo;
};

// 初始化后的App对象所需要的运行时环境，包含了一些全局变量和方法，包含平台状态，注册插件等
var createBotApp = function createBotApp() {
  var _getPlatformInfo = getPlatformInfo(),
    platform = _getPlatformInfo.platform,
    features = _getPlatformInfo.features,
    version = _getPlatformInfo.version;
  console.log('platform', platform, features, version);
  // const isReady = () => {
  //    const iosReady = platform === 'ios' && version >=1 && /mixPMPrompt|usePostMessage/.test(features)
  //    return iosReady() && window?.webkit?.messageHandlers?.BOTbridge
  // }
};

export { createBotApp };
//# sourceMappingURL=bot.esm.js.map
