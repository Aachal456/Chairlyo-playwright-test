import { expect, Page} from '@playwright/test';
import BasePage from './BasePage';
import DashboardLocators from '../Locators/dashboardlocator';

export default class DashboardPage extends BasePage{
    readonly dashboardLocators: DashboardLocators;
    constructor(page:Page){
        super(page);
        this.dashboardLocators = new DashboardLocators(page);
    }

    async VerifyDashboardPage(){  
         await expect(this.Page).toHaveURL('/dashboard');
    }

    async navigateToOrganizationPage(){
         await this.Page.goto('/organizations');
    }

    async gotoOrganizationPage(){
         await this.VerifyDashboardPage();
         await this.dashboardLocators.OrganizationLocator.click();
    }
}

// import { Locator, Page } from '@playwright/test';

// export default class DashboardLocators {

//     readonly dashboardTitle: Locator;
//     readonly profileIcon: Locator;
//     readonly organizationMenu: Locator;
//     readonly settingsMenu: Locator;
//     readonly logoutButton: Locator;

//     constructor(page: Page) {
//         this.dashboardTitle = page.locator('h1');
//         this.profileIcon = page.locator('[data-testid="profile-icon"]');
//         this.organizationMenu = page.locator('text=Organizations');
//         this.settingsMenu = page.locator('text=Settings');
//         this.logoutButton = page.locator('text=Logout');
//     }

// }


