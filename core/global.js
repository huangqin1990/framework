import { initBotGlobal } from "./runtime";

export const Bot = initBotGlobal()

export const registerModule = Bot.registerModule

export const registerWebModule = Bot.registerWebModule

export const Plugins = Bot.Plugins