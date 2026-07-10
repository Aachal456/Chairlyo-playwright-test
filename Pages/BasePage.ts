import {Page} from '@playwright/test';
export default abstract class BasePage{
    protected readonly Page:Page;

constructor(Page:Page){
    this.Page = Page;
}    
async navigateToChairlyo(url:string){
    await this.Page.goto(url);
}
}