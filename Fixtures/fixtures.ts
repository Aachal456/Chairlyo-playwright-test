import path from 'path'
import {expect as baseExpect,test as baseTest} from '@playwright/test';
import { ApiClients } from '../api/clients/ApiClients';
import { AuthService } from '../api/Services/AuthService';
import { OrganizationApiPayload } from '../api/types/organization.types';
import { OrganizationService } from '../api/Services/OrganizationService';
import { request } from 'http';
import OrganizationLocators from '../Locators/organizationlocators';

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

export function toApiPayload(organizationData: OrganizationData, planTypeID: number): Record<string, unknown> {
    return {
        admin_email: organizationData.admin.email,
        admin_first_name: organizationData.admin.firstName,
        admin_last_name: organizationData.admin.lastName,
        admin_password: organizationData.admin.password,
        admin_phone: organizationData.admin.phone,
        country: 'np',
        name: organizationData.name,
        organization_logo: '',
        plan_type: planTypeID,
        send_mail_notification: false,
        slug: organizationData.slug,
        status: organizationData.status,
        timezone: 'Asia/Kathmandu',
        trial_days: organizationData.trialDays,
    };
}

type Fixtures ={
    email:string;
    password:string;
    baseUrl:string;
    uiBaseUrl:string;
    apiBaseUrl:string;
    organizationData: OrganizationData;
    apiClient: ApiClients;
    authService:AuthService;
    authToken: string;
    organizationService: OrganizationService;
    planTypeId: number
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
    },

    apiClient: async({request, apiBaseUrl}, use)=>{
        await use(new ApiClients(request, apiBaseUrl));
    },

    authService: async({apiClient},use)=>{
        await use(new AuthService(apiClient));
    },

    authToken: async({authService, email, password},use)=>{
        const token= await authService.loginWithAPI(email,password);
        await use(token);
    },

    organizationService: async({apiClient},use)=>{
        await use(new OrganizationLocators(apiClient));
    },
    planTypeId: async({}=>{
        await use(40);
    });
});


export const expect = baseExpect;