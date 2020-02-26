import { config } from '../configs'

const instance = config.instance;

export const getToken = () => {
    let data = {
        grant_type: "client_credentials",
        client_id: config.parameter.site,
        client_secret: config.parameter.site
    }
    return new Promise((resolve) => {
        instance.post('/v1/token', data).then((response) => {
            localStorage.setItem('myToken', response.data.access_token)
            resolve(response.data.access_token)
        }).catch((error) => {
            console.log(error)
        })
    })

}
