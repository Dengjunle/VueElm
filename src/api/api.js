import request from './request.js';

const api = {
    // 接口
    seller() {
        return request('static/data/seller.json', {}, 'get');
    },
    goods() {
        return request('static/data/goods.json', {}, 'get');
    },
    ratings() {
        return request('static/data/ratings.json', {}, 'get');
    }
};

export default api;
