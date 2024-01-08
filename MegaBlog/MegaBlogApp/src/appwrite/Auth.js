import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

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
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password
      );
      if (userAccount) {
        return this.login({email, password});
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite :: createAccount :: ", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("appwrite :: login :: error", error);
    }
  }

  async getCurrentuser(){
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite :: getCurrentuser", error); 
    }
    return null;
  }

  async logout(){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite :: logout", error);
    }
  }

}
const authService = new AuthService();

export default authService;
