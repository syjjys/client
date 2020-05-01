import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:8080' //设置访问路径
    // baseURL: 'https://api.tuzixinwen.com'
});

Axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
Axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

Axios.interceptors.response.use(
    res => {
        // 如果返回的code是202，则表示token有问题，直接把登录信息清除
        if (res.data && res.data.code === 202) {
            localStorage.removeItem("username");
            localStorage.removeItem("Authorization");
            window.location.reload();
        } else if (res.data && res.data.code === 500) {
            res.data.description = "服务器异常";
        }
        return res;
    }
);

export default Axios;