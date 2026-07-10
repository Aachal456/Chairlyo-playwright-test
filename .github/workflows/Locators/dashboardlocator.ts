import  {Page, Locator} from '@playwright/test';
 export default class DashboardLocators{
    dashboardText: Locator | undefined;

    constructor(Page:Page){
        this.dashboardText=Page.getByRole('heading',{name:'Dashboard'});
    }
 }