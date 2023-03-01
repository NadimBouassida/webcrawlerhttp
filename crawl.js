function normalizeUrl(urlString){
    const urlObj = new URL(urlString)
    const hotsPath = `${urlObj.hostname}${urlObj.pathname}`
    if (hotsPath.length > 0 && hotsPath.slice(-1) === '/'){
        return hotsPath.slice(0,-1)
    }
    return hotsPath
}

module.exports = {
    normalizeUrl
}