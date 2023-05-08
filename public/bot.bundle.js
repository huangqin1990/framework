/*! BotimFramework: https://botim.com/ - MIT License */
var BotimFramework=function(r){"use strict";var e=/(iOS|Android)MPAdapter\/(\d+(\.?\d*))(\(.*\)|\/.*)?/;return r.createBotApp=function(){var r,o,t=(r={},o=e.exec(navigator.userAgent),r.platform=o?o[1].toLowerCase():"web",r.version=o?o[2]:-1,r.features=o?o[4]:"",r),a=t.platform,n=t.features,i=t.version;console.log("platform",a,n,i)},r}({});
//# sourceMappingURL=bot.bundle.js.map
