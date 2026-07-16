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
    uiBaseUrl:string;
    apiBaseUrl:string;
    organizationData: OrganizationData;

}
export const test=baseTest.extend<Fixtures>({
    //email:requireEnv('TEST_EMAIL'),
    //password:requireEnv('TEST_PASSWORD'),
    email: process.env.TEST_EMAIL ,
    password: process.env.TEST_PASSWORD,
    uiBaseUrl: process.env.UI_BASE_URL,
    apiBaseUrl: process.env.API_BASE_URL,
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