import request from '../utils/axios'

export function verify() {
    return request({
        url: '/sample/test/',
        method: 'get'
    })
}

export default {}
