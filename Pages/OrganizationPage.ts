import {expect, Page} from '@playwright/test';
import BasePage from './BasePage';
import OrganizationLocators from '../.github/workflows/Locators/dashboardlocator';

export default class OrganizationPage extends BasePage{
    readonly OrganizationLocators: OrganizationLocators;
    constructor(Page:Page){
        super(Page);
        this.OrganizationLocators = new OrganizationLocators(Page);
    }

    async VerifyOrganizationPage(){
        await expect(this.Page).toHaveURL('/organization');
    }
}