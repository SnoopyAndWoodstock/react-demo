import axios from 'axios';
import Util from '../helpers/util'
import { GLOBAL_API_DOMAIN } from './config'

axios.defaults.baseURL = GLOBAL_API_DOMAIN;

// if (Util.getLocalStorageInfo('KXTX_ACCESS_TOKEN')) {
//     axios.defaults.headers.common['Authorization'] = Util.getLocalStorageInfo('KXTX_ACCESS_TOKEN').accessToken
// }

export default axios