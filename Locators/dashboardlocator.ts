import  {Page, Locator} from '@playwright/test';
 export default class DashboardLocators{
     OrganizationLocator: any;
     organizationText(organizationText: any) {
         throw new Error('Method not implemented.');
     }
    dashboardText: Locator | undefined;
     browseFilesButton: any;
     static applyButton: any;

    constructor(Page:Page){
        this.dashboardText=Page.getByRole('heading',{name:'Dashboard'});
    }
 }