const agentRegExp = /(iOS|Android)MPAdapter\/(\d+(\.?\d*))(\(.*\)|\/.*)?/;

export const getPlatformInfo = () => {
    const platformInfo = { }
    const execAgent = agentRegExp.exec(navigator.userAgent);
    platformInfo.platform = execAgent ? execAgent[1].toLowerCase() : 'web';
    platformInfo.version = execAgent ? execAgent[2] : -1;
    platformInfo.features = execAgent ? execAgent[4] : '';
    return platformInfo;
}

export const isNativePlatform = () => {
    const { platform } = getPlatformInfo()
    return platform !== 'web'
}