
import {test} from "../fixtures/fixture";
import userData from "../test-data/user.json";

test("Register User Test", async ({ loginPage, basePage, registrationPage }) => {
    const user = userData.user;
    await basePage.navigateTo("https://automationexercise.com/");
    await loginPage.clickLogin();

    await loginPage.userSignUp(user.userName, user.userEmail);
    await registrationPage.enterAccountInformation(user);   
    await loginPage.verifyAccountCreated();  
    await loginPage.logoutUser();
    
});

test("Delete user", async ({ loginPage, basePage }) => {
    await basePage.navigateTo("https://automationexercise.com/");
    await loginPage.deleteUser();
});
