import Util from './helpers/util'

class AppState {
    webpSupport = false
    appVersion = '1.0.0'
    async initConfig() {
        this.webpSupport = await Util.checkWebp()
    }
}

export default new AppState()