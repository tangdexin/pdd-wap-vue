import axios from 'axios'
import qs from 'qs'
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error)
    },
)

axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

function checkStatus(response) {
    if (response.status === 200 || response.status === 304) {
        return response
    }
    return {
        data: {
            success: false,
            message: response.statusText,
            data: response.statusText
        }
    }
}

function checkCode(res) {
    // if (!res.data.success) {
    //     setMessage(res.data.message || res.data.data)
    // }
    return res.data
}

export default {
    post(url, data) {
        return axios({
            method: 'post',
            url:url,
            data: qs.stringify(data),
            timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
            .then(checkStatus)
            .then(checkCode)
    },
    get(url, params) {
        return axios({
            method: 'get',
            url:url,
            params,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(checkStatus)
            .then(checkCode)
    }
}
