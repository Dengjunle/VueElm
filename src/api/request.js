import axios from 'axios';

// 一些请求配置

const service = axios.create({
    baseURL: process.env.API_ROOT, // 接口的域名地址
    header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
});

export default function request(url, data = {}, method = 'post') {
    return new Promise((resolve, reject) => {
        const options = {
            url,
            method
        };
        if (method.toLowerCase() === 'get') {
            options.params = data;
        } else {
            options.data = data;
        };
        service(options).then(res => {
            // console.log('返回数据', res);
            resolve(res);
        }).catch(error => {
            reject(error);
            console.error(error);
        });
    });
}
