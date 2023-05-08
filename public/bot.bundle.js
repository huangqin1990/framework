/*! BotFramework: https://botim.com/ - MIT License */
!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e="undefined"!=typeof globalThis?globalThis:e||self).BOT={})}(this,(function(e){"use strict";var o=/(iOS|Android)MPAdapter\/(\d+(\.?\d*))(\(.*\)|\/.*)?/;e.createBotApp=function(){var e,t,n=(e={},t=o.exec(navigator.userAgent),e.platform=t?t[1].toLowerCase():"web",e.version=t?t[2]:-1,e.features=t?t[4]:"",e).platform;console.log("platform",n)}}));
//# sourceMappingURL=bot.bundle.js.map
