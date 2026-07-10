import {expect as baseExpect,test as baseTest} from '@playwright/test';
type Fixtures ={
    email:string;
    password:string;
    baseUrl:string;
}
export const test=baseTest.extend<Fixtures>({
    email:'admin@chairlyo.com',
    password:'adminpassword',
    baseUrl:'https://stage.chairlyo.com/login',
});
export const expect = baseExpect;