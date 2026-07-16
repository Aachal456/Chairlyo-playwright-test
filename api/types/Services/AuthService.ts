import { expect } from "@playwright/test";
import { ApiClients } from "../clients/ApiClients";

export class AuthService {
    constructor(private readonly client: ApiClients) {}
    async loginWithAPI(email: string, password: string): Promise<string>{
        const response = await this.client.post('/api/accounts/login',{
            email,
            password,
            branch_id:0,
            remember_me:true,
        });
        
        expect(response.ok(),`Login Failed: ${response.status} ${await response.text()}`).toBeTruthy();
        const body = await response.json();
        const token: string = body.access;
        this.client.setToken(token);
        return token;
        }
        
    }


function toBeTruthy() {
    throw new Error("Function not implemented.");
}
