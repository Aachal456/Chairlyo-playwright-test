import {expect} from '@playwright/test';
import {ApiClients} from '../clients/ApiClients';
import {OrganizationApiPayload, OrganizationApiResponse} from '../types/organization.types';

export class OrganizationService {
    static createOrganization: any;
    constructor(private readonly client: ApiClients) {}

    async createOrganization(payload: OrganizationApiPayload): Promise<OrganizationApiResponse> {
        const response = await this.client.post('/api/organizations/organization/', payload);
        expect(response.ok(), `Create Organization Failed: ${response.status()} ${await response.text()}`).toBeTruthy();
        return response.json();
    }

    async UpdateOrganization(slug: string, payload: Partial<OrganizationApiPayload>): Promise<OrganizationApiResponse> {
        const response = await this.client.patch(`/api/organizations/organization/${slug}/`, payload);
        expect(response.ok(), `Update Organization Failed: ${response.status()} ${await response.text()}`).toBeTruthy();
        return response.json(); 
    }

    async deleteOrganization(slug: string): Promise<void> {
        const response = await this.client.delete(`/api/organizations/organization/${slug}/`);
        expect(response.ok(), `Delete Organization Failed: ${response.status()} ${await response.text()}`).toBeTruthy();
    }
}
 