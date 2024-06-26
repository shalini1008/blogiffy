import conf from '../config/config.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
        
    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, { name });
    
            if (userAccount) {
                // Log in the user after successful account creation
                return this.login({ email, password });
            } else {
                throw new Error('Failed to create account');
            }
        } catch (error) {
            throw new Error(`Failed to create account: ${error.message}`);
        }
    }
    

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw new Error(`Failed to login: ${error.message}`);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw new Error(`Failed to get account details: ${error.message}`);
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw new Error(`Failed to logout: ${error.message}`);
        }
    }
}

const authService = new AuthService();

export default authService;

