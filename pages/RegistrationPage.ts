import { BasePage } from "./BasePage";
import { Page, Locator } from "@playwright/test";

export interface UserRegistrationData {
    userName: string;
    userEmail: string;
    title: 'Mr.' | 'Mrs.';
    password: string;
    day: string;
    month: string;
    year: string;
    firstName: string;
    lastName: string;
    company?: string;
    address1: string;
    address2?: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
}

export class RegistrationPage extends BasePage {

    private readonly titleRadio = (name: string) => this.page.getByRole('radio', { name });
    private readonly passwordInput = this.page.getByRole('textbox', { name: 'Password *' });
    private readonly daysSelect = this.page.locator('#days');
    private readonly monthsSelect = this.page.locator('#months');
    private readonly yearsSelect = this.page.locator('#years');
    private readonly firstNameInput = this.page.getByRole('textbox', { name: 'First name *' });
    private readonly lastNameInput = this.page.getByRole('textbox', { name: 'Last name *' });
    private readonly companyInput = this.page.getByRole('textbox', { name: 'Company', exact: true });
    private readonly address1Input = this.page.getByRole('textbox', { name: 'Address * (Street address, P.' });
    private readonly address2Input = this.page.getByRole('textbox', { name: 'Address 2' });
    private readonly countrySelect = this.page.getByLabel('Country *');
    private readonly stateInput = this.page.getByRole('textbox', { name: 'State *' });
    private readonly cityInput = this.page.getByRole('textbox', { name: 'City *' });
    private readonly zipCodeInput = this.page.locator('#zipcode');
    private readonly mobileNumberInput = this.page.getByRole('textbox', { name: 'Mobile Number *' });
    private readonly createAccountBtn = this.page.getByRole('button', { name: 'Create Account' });

    constructor(page: Page) {
        super(page);
    }

    /**
     * Fills the entire registration form and submits.
     */
    public async registerUser(user: UserRegistrationData): Promise<void> {
        await this.titleRadio(user.title).check();
        await this.passwordInput.fill(user.password);

        await this.daysSelect.selectOption(user.day);
        await this.monthsSelect.selectOption(user.month);
        await this.yearsSelect.selectOption(user.year);

        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        
        if (user.company) await this.companyInput.fill(user.company);
        
        await this.address1Input.fill(user.address1);
        if (user.address2) await this.address2Input.fill(user.address2);

        await this.countrySelect.selectOption(user.country);
        await this.stateInput.fill(user.state);
        await this.cityInput.fill(user.city);    
        await this.zipCodeInput.fill(user.zipcode);
        await this.mobileNumberInput.fill(user.mobileNumber);
        
        await this.createAccountBtn.click();
    }
}