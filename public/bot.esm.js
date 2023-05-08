/*! BotFramework: https://botim.com/ - MIT License */
var e=/(iOS|Android)MPAdapter\/(\d+(\.?\d*))(\(.*\)|\/.*)?/,o=function(){var o,r,a=(o={},r=e.exec(navigator.userAgent),o.platform=r?r[1].toLowerCase():"web",o.version=r?r[2]:-1,o.features=r?r[4]:"",o).platform;console.log("platform",a)};export{o as createBotApp};
//# sourceMappingURL=bot.esm.js.map
