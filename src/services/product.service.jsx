import {config} from '../config'
const  instance = config.instance;
const  instance_rbac = config.instance_rbac;

export const getAllProduct = async ( domain, products ) => {
    let url = '/v1/permission';
    if(domain)
        url += '?domain=' + domain;
    if(products)
        url += '&products=' + products;
    let result = await instance_rbac.get(url);
    return result;
}

export const getProduct = function ({subject,page_count = 100, page_state}) {
    let url = '/v1/products';
    if (page_count)
        url += '?page_count=' + page_count
    if (page_state)
        url += '&page_state=' + page_state
    if(subject)
        url += '&subject=' + subject
    return new Promise(resolve => {
        instance_rbac.get(url).then((data) => {
            resolve(data.data);
        })
    })
}

export const createProduct = async ( data ) => {
    let url = '/v1/products';
    let result = await instance_rbac.post(url, data);
    return result;
}

export const removeProduct = async ( domain, products ) => {
    let url = '/v1/products';
    url += '?domain=' + domain + '&products=' + products;
    let result = await instance_rbac.delete(url);
    return result;
}