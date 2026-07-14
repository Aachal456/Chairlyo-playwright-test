import {Locator,Page} from'@playwright/test';

export default class LoginLocators{
    readonly emailInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
    readonly alertMessage:Locator;
    readonly dashboard:Locator;
    readonly organizationForm:Locator;
    readonly browseFilesButton!: Locator;


    constructor(page:Page){
        this.emailInput = page.locator('[type="email"]');
        this.passwordInput = page.locator('[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.alertMessage = page.locator('[role="alert"]');
        this.dashboard = page.getByText('Dashboard').nth(1);
        this.organizationForm = page.locator('[data-testid="organization-form"]');
    }
}
