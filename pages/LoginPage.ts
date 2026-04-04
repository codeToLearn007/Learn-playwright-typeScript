import { BasePage } from "./BasePage";
import { expect, Page, Locator } from "@playwright/test";

export class LoginPage extends BasePage {

    private readonly consentBtn = this.page.getByRole('button', { name: 'Consent' });
    private readonly signupLoginLink = this.page.getByRole("link", { name: "Signup / Login" });
    
    private readonly signUpNameInput = this.page.locator('[data-qa="signup-name"]');
    private readonly signUpEmailInput = this.page.locator('[data-qa="signup-email"]');
    private readonly signUpBtn = this.page.locator('[data-qa="signup-button"]');
    
    private readonly loginEmailInput = this.page.locator('[data-qa="login-email"]');
    private readonly loginPasswordInput = this.page.locator('[data-qa="login-password"]');
    private readonly loginBtn = this.page.locator('[data-qa="login-button"]');
    
    private readonly accountCreatedMsg = this.page.getByText('Account Created!');
    private readonly accountDeletedMsg = this.page.getByText('ACCOUNT DELETED!');
    private readonly continueBtn = this.page.getByRole('link', { name: 'Continue' });
    private readonly deleteAccountLink = this.page.getByRole('link', { name: 'Delete Account' });
    private readonly logoutLink = this.page.getByRole('link', { name: 'Logout' });

    constructor(page: Page) {
        super(page);
    }

    public async goToLoginSection() {
       
        if (await this.consentBtn.isVisible()) {
            await this.consentBtn.click();
        }
        await this.signupLoginLink.click();
    }

    public async login(email: string, password: string) {
        await this.loginEmailInput.fill(email);
        await this.loginPasswordInput.fill(password);
        await this.loginBtn.click();
    }

    public async userSignUp(userName: string, signUpEmail: string) {
        await this.signUpNameInput.fill(userName);
        await this.signUpEmailInput.fill(signUpEmail);
        await this.signUpBtn.click();
    }

    public async verifyAccountCreated() {
        await expect(this.accountCreatedMsg).toBeVisible();
        await this.continueBtn.click();
    }

    public async logoutUser() {
        await this.logoutLink.click();
    }

    public async deleteUser() {
        await this.deleteAccountLink.click();
        await expect(this.accountDeletedMsg).toBeVisible();
        await this.continueBtn.click();
    }
}