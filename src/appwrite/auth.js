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
        // eslint-disable-next-line no-useless-catch
        try {
            const id=ID.unique();
            const userAccount = await this.account.create(id,email, password, name);
            if (userAccount) {
              
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        console.log(this)
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService