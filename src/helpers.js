import axios from "axios";

export const getAuthToken = () => {
    return window.localStorage.getItem('auth_token');
};

export const setAuthHeader = (token) => {
    window.localStorage.setItem('auth_token', token);
};

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const request = (method, url, data, onSuccess, onError) => {
    return axios({
        method: method,
        url: url,
        headers: {'Authorization': `Bearer ${getAuthToken()}`},
        data: data})
            .then((response) => {
                if (url.includes('signIn')) {
                    setAuthHeader(response.data.token)
                }
                try {
                    onSuccess(response)
                } catch (e) {
                    console.error(e);
                }

            })
            .catch((response) => {
                if (response.status === 401 && !url.includes('signIn')) {
                    setAuthHeader('')
                }
                onError(response)
            });
};