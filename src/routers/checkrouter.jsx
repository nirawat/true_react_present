import {getToken} from "../services/authorization.service";
import {config} from "../config";
import {messageAlert} from '../helper'

const instance = config.instance;
const instance_rbac = config.instance_rbac;
const server_client = config.server_client;
export const isAuthenticated = () => (
    localStorage.getItem('myWeb-auth')
)
// ----------------------------------------------------------
instance.interceptors.request.use((config) => {
    if (localStorage.getItem('myToken')) {
        const token = localStorage.getItem('myToken');
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
}, error => {
    return Promise.reject(error)
})

instance.interceptors.response.use(null, (error) => {
    if (error.config && error.response && error.response.status === 401) {
        return  getToken().then((myToken) => {
            error.config.headers.Authorization = `Bearer ${myToken}`;
            return instance.request(error.config);
        })
    }
    if(error.response.status > 401 && error.response.status != 500){
        messageAlert("error","Warning message","Please contract Thomas dev")
    }
    return Promise.reject(error);
});
// -----------------------------------------------------------

// ----------------------------------------------------------
instance_rbac.interceptors.request.use((config) => {
    if (localStorage.getItem('myToken')) {
        const token = localStorage.getItem('myToken');
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
}, error => {
    return Promise.reject(error)
})

instance_rbac.interceptors.response.use(null, (error) => {
    if (error.config && error.response && error.response.status === 401) {
        return  getToken().then((myToken) => {
            error.config.headers.Authorization = `Bearer ${myToken}`;
            return instance_rbac.request(error.config);
        })
    }
    if(error.response.status > 401 && error.response.status != 500){
        messageAlert("error","Warning message","Please contract Thomas dev")
    }
    return Promise.reject(error);
});
// -----------------------------------------------------------

server_client.interceptors.request.use((config) => {
    if (localStorage.getItem('myToken')) {
        const token = localStorage.getItem('myToken');
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
}, error => {
    return Promise.reject(error)
})

server_client.interceptors.response.use(null, (error) => {
    if (error.config && error.response && error.response.status === 401) {
        return  getToken().then((myToken) => {
            error.config.headers.Authorization = `Bearer ${myToken}`;
            return server_client.request(error.config);
        })
    }
    if(error.response.status > 401 && error.response.status != 500){
        messageAlert("error","Warning message","Please contract Thomas dev")
    }
    return Promise.reject(error);
});


