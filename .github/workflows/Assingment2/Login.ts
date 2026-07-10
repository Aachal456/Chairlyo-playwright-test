import {Locator,Page} from'@playwright/test';
export const LoginLocator = {
    email: '[name="email"]',
    password: '[name="password"]',
    loginButton: 'button[type="submit"]',
    errorMessage: '.alert-danger'
};