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

    async createAccount({email, password, name}) {
         try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            // If the user is successfully created, log them in
            if (userAccount) {
                return this.loginAccount({ email, password });
            }
            else{
                return userAccount
            }
        } catch (error) {
            throw new Error(`Failed to create account: ${error.message}`);
        }
    }

    async login({email, password}) {
         try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw new Error(`Failed to login: ${error.message}`);
        }
    }

    async getCurrentUser() {
       try {
            return await this.account.getSession('current');
        } catch (error) {
            throw new Error(`Failed to get account details: ${error.message}`);
        }
        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw new Error(`Failed to logout: ${error.message}`);
        }
}

const authService = new AuthService();

export default authService
