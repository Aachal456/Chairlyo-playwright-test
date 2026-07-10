import { Page, expect } from '@playwright/test';
import { LoginLocator } from '../Assingment2/github/workflows/login.Page';

export class LoginPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('/login');
    }

    async enterEmail(email: string) {
        await this.page.locator(LoginLocator.email).fill(email);
    }

    async enterPassword(password: string) {
        await this.page.locator(LoginLocator.password).fill(password);
    }

    async clickLogin() {
        await this.page.locator(LoginLocator.loginButton).click();
    }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async verifyError() {
        await expect(this.page.locator(LoginLocator.errorMessage)).toBeVisible();
    }
}