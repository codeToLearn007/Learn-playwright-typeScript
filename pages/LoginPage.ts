import { BasePage } from "./BasePage";
import { expect, Page } from "@playwright/test";
import userData from "../test-data/user.json";
import { assert } from "console";

export class LoginPage extends BasePage {

    private loginButton;
    private signUpUserName;
    private signUpEmail;
    private signUpButton;
    private consentButton;

    private accountCreatedMessage;
    private continueButton;
    private loginUserEmail;
    private loginPassword;
    private loginButtonFinal;

    constructor(page: Page) {
        super(page);
        this.loginButton = this.page.getByRole("link", { name: "Signup / Login" });
        this.signUpUserName = this.page.locator('[data-qa="signup-name"]');
        this.signUpEmail = this.page.locator('[data-qa="signup-email"]');
        this.signUpButton = this.page.locator('[data-qa="signup-button"]');
        this.consentButton = this.page.getByRole('button', { name: 'Consent' });

        this.accountCreatedMessage = this.page.getByText('Account Created!')
        this.continueButton = this.page.getByRole('link', { name: 'Continue' });
        this.loginUserEmail = this.page.locator('[data-qa="login-email"]');
        this.loginPassword = this.page.locator('[data-qa="login-password"]');
        this.loginButtonFinal = this.page.locator('[data-qa="login-button"]');
  
    }

    public async clickLogin() {
        await this.consentButton.click();
        await this.loginButton.click();
    }

    public async deleteUser() {
        await this.clickLogin();
        await this.loginUserEmail.fill(userData.user.userEmail);
        await this.loginPassword.fill(userData.user.password);
        await this.loginButtonFinal.click();
        await this.page.getByRole('link', { name: 'Delete Account' }).click();
        assert(await this.page.getByText('ACCOUNT DELETED!').isVisible(), "Account deletion message is not visible");
        await this.page.getByRole('link', { name: 'Continue' }).click();
    }

    public async userSignUp(userName: string, signUpEmail: string) {
        await this.signUpUserName.fill(userName);
        await this.signUpEmail.fill(signUpEmail);
        await this.signUpButton.click();
    }
    
    public async verifyAccountCreated() {
         assert(await this.accountCreatedMessage.isVisible(), "Account Created message is not visible");
         await this.continueButton.click();
    }

    public async logoutUser() {
        await this.page.getByRole('link', { name: 'Logout' }).click();
    }

}