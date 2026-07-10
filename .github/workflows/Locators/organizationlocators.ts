import  {Page, Locator} from '@playwright/test';
 export default class OrganizationLocators{
    organizationText: Locator;

    constructor(Page:Page){
      this.organizationText=Page.getByRole('heading',{name:'Organization'});
    }
       
 }