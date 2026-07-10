import { Locator, Page } from '@playwright/test';

export default class DashboardLocators {

    readonly dashboardTitle: Locator;
    readonly profileIcon: Locator;
    readonly organizationMenu: Locator;
    readonly settingsMenu: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.dashboardTitle = page.locator('h1');
        this.profileIcon = page.locator('[data-testid="profile-icon"]');
        this.organizationMenu = page.locator('text=Organizations');
        this.settingsMenu = page.locator('text=Settings');
        this.logoutButton = page.locator('text=Logout');
    }

}


