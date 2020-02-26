import axios from "axios";

export const parameter = {
    "base_url": "https://api-test.com/auth/",
    "site": "web-auth",
    "menu": [
        {
            "menu_name": "menu_dashboard",
            "style_menu": "main",
            "icon": "dashboard",
            "path": "/auth/auth_token",
            "key": "1"
        }
    ]
}

export const instance = axios.create({
    baseURL: parameter.base_url,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('myToken')}`
    }
});
