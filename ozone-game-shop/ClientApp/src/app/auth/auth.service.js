"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.saveUser = function (user) {
        window.localStorage.setItem('user', JSON.stringify(user));
    };
    Auth.getUser = function () {
        var userJson = window.localStorage.getItem('user');
        if (userJson) {
            return JSON.parse(userJson);
        }
        else {
            return {};
        }
    };
    Auth.removeUser = function () {
        window.localStorage.removeItem('user');
    };
    Auth.authenticateUser = function (token) {
        window.localStorage.setItem('token', token);
    };
    Auth.isUserAuthenticated = function () {
        return window.localStorage.getItem('token') !== null;
    };
    Auth.deauthenticateUser = function () {
        window.localStorage.removeItem('token');
    };
    Auth.getToken = function () {
        return window.localStorage.getItem('token');
    };
    return Auth;
}());
exports.Auth = Auth;
//# sourceMappingURL=auth.service.js.map