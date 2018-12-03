export class Auth {
  static saveUser(user) {
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  static getUrl() {
    return "http://localhost:49682/api/";
  }

  static getUser() {
    const userJson = window.localStorage.getItem('user');

    if (userJson) {
      return JSON.parse(userJson);
    } else {
      return {};
    }
  }
  static removeUser() {
    window.localStorage.removeItem('user');
  }

  static authenticateUser(token) {
    window.localStorage.setItem('token', token);
  }

  static isUserAuthenticated() {
    return window.localStorage.getItem('token') !== null;
  }

  static isAdmin() {
    if (Auth.getUser == {}) return;
    return Auth.getUser().role === 'admin';
  }

  static deauthenticateUser() {
    window.localStorage.removeItem('token');
  }

  static getToken() {
    return window.localStorage.getItem('token');
  }
}
