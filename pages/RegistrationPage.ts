import { BasePage } from "./BasePage";
import { Page } from "@playwright/test"

export class RegistrationPage extends BasePage {
    private title;
    private password;
    private days;
    private month;
    private year;
    private firstName;
    private lastName;
    private company;
    private address1;
    private address2;
    private country;
    private state;
    private city;
    private zipCode;
    private mobileNumber;
    private createAccountButton; 

    constructor (page: Page) {
        super(page);

        this.title = this.page.getByRole('radio', { name: 'Mr.' })
        this.password = page.getByRole('textbox', { name: 'Password *' });
        this.days = page.locator('#days');
        this.month = page.locator('#months');
        this.year = page.locator('#years');
        this.firstName = page.getByRole('textbox', { name: 'First name *' });
        this.lastName = page.getByRole('textbox', { name: 'Last name *' });
        this.company = page.getByRole('textbox', { name: 'Company', exact: true });
        this.address1 = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
        this.address2 = page.getByRole('textbox', { name: 'Address 2' });
        this.country = page.getByLabel('Country *');
        this.state = page.getByRole('textbox', { name: 'State *' });
        this.city = page.getByRole('textbox', { name: 'City * Zipcode *' });
        this.zipCode = page.locator('#zipcode');
        this.mobileNumber = page.getByRole('textbox', { name: 'Mobile Number *' });
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    }

    public async enterAccountInformation(user: any) {
        await this.title.click();
        await this.password.fill(user.password);
        await this.days.selectOption(user.day);
        await this.month.selectOption(user.month);
        await this.year.selectOption(user.year);
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.company.fill(user.company);
        await this.address1.fill(user.address1);
        await this.address2.fill(user.address2);
        await this.country.selectOption(user.country);
        await this.state.fill(user.state);
        await this.city.fill(user.city);    
        await this.zipCode.fill(user.zipcode);
        await this.mobileNumber.fill(user.mobileNumber);
        await this.createAccountButton.click();
    }  

}
