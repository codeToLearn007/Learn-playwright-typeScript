
import { LoginPage } from "../pages/LoginPage";
import { BasePage } from "../pages/BasePage";
import { RegistrationPage } from "../pages/RegistrationPage";

import { test as base } from "@playwright/test";

type Fixtures = {
    loginPage: LoginPage;
    basePage: BasePage;
    registrationPage: RegistrationPage;
};

export const test = base.extend<Fixtures>({

    loginPage: async ({page}, use) => {
        await use(new LoginPage(page))
    },

    basePage: async ({page}, use) => {
        await use(new BasePage(page))
    },
    
    registrationPage: async ({page}, use) => {
        await use(new RegistrationPage(page))
    }

});

export const expect = test.expect;