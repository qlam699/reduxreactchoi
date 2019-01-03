import decode from 'jwt-decode';
import axios from 'axios'
import {API_HOST} from '../config/api'


export default class AuthService {
    constructor() {
        this.login = this.login.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    addHeader() {
        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'JWT ' + this.getToken(),
        };
        return headers;
    };


    login(username, password, remember=false) {
        this.setRemember(remember);
        return axios.post(`${API_HOST}/auth/login/`, {
            username: username,
            password: password,
        });
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const TOKEN_REFRESH_INTERVAL = 24 * 24 * 3600; //TODO: Remove first 24 when backend finish
            const decoded = decode(token);
            let remember = this.getRemember() || false;
            let tokenExpired = decoded.exp;
            remember = true; //TODO: Remove this line when backend finish
            if (JSON.parse(remember)) {
                tokenExpired = tokenExpired + TOKEN_REFRESH_INTERVAL;
            } else {
                return tokenExpired < Date.now() / 1000;
            }
        } catch (err) {
            return false;
        }
    }

    setToken(idToken) {
        localStorage.setItem('id_token', idToken);
    }

    setRemember(remember) {
        localStorage.setItem('remember', remember);
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    setUserId(userId) {
        localStorage.setItem('userId', userId);
    }

    getUserId() {
        return localStorage.getItem('userId');
    }

    getRemember() {
        return localStorage.getItem('remember');
    }

    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('remember');
        localStorage.removeItem('userId');
    }

    getProfile() {
        return decode(this.getToken());
    }
}
