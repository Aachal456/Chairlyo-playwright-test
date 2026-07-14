
import { expect, Page } from "@playwright/test";
import LoginLocators from "../Locators/login.locators";
import BasePage from "./BasePage";
export default class LoginPage extends BasePage{
    readonly loginLocators: LoginLocators;

    constructor(page:Page){
        super(page);
        this.loginLocators= new LoginLocators(page);
    }

    async fillEmail(email:string){
        await this.loginLocators.emailInput.fill(email);
    }

    async verifyEmailFieldValue(email:string){
        await expect.soft(this.loginLocators.emailInput).toHaveValue(email);
    }

    async fillPassword(password:string){
        await this.loginLocators.passwordInput.fill(password);
    }
    async verifyPasswordFieldValue(password:string){
        await expect(this.loginLocators.passwordInput).toHaveValue(password);
    }
   
    async clickLoginButton(){
         await this.loginLocators.loginButton.click();
    }

    async loginToChairlyo(email:string,password:string){
        await this.loginLocators.emailInput.fill(email);
         await this.loginLocators.passwordInput.fill(password);
          await this.loginLocators.loginButton.click();
    }

    async verifyLoginSuccess(){
        await expect(this.loginLocators.alertMessage).toBeVisible();
        await expect(this.loginLocators.alertMessage).toHaveText('SuccessLogin successful!');
        await expect(this.loginLocators.dashboard).toBeVisible()
    }

    async verifyLoginFailure(){
        await expect(this.loginLocators.alertMessage).toBeVisible();
         await expect(this.loginLocators.alertMessage).toHaveText('Error')
    }
    async verifyDashboard(){
      await expect(this.loginLocators.dashboard).toBeVisible();
    }
}