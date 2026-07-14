import {expect as baseExpect,test as baseTest} from '@playwright/test';

export type OrganizationData ={
    name: string;
    slug: string;
    status: string;
    planType: string;
    trialDays: string;
    imagePath: string;
    admin: {
        firstName: string;
        lastName: string;
        email:string;
        password:string;
        phone: string;
    };
};

type Fixtures ={
    email:string;
    password:string;
    baseUrl:string;
    organizationData: OrganizationData;

}
export const test=baseTest.extend<Fixtures>({
    email:'admin@chairlyo.com',
    password:'adminpassword',
    baseUrl:'https://stage.chairlyo.com/login',
    organizationData: async ({}, use) => {
        const uniqueId = Date.now();
        await use({
            name:  `web-development-${uniqueId}`,
            slug: `web-development-${uniqueId}`,
            status: 'Trial',
            planType: 'Basic',
            trialDays: '14',
            imagePath: 'filePath/to/image.png',
            admin:{
                firstName: 'John',
                lastName: 'Doe',
                email: `john.doe-${uniqueId}@gmail.com`,
                password: `Password$123`,
                phone: `9812345678`,
            },
        });
    }
})   

export const expect = baseExpect;