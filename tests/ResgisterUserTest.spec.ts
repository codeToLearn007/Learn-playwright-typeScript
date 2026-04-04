import { test } from "../fixtures/fixture";
import userData from "../test-data/user.json";
import { UserRegistrationData } from "../pages/RegistrationPage";

// Cast the nested 'user' object from your JSON to your Interface
const user = userData.user as UserRegistrationData;

test.describe("User Management Flow", () => {
    
    test.beforeEach(async ({ basePage }) => {
        await basePage.navigateTo("https://automationexercise.com/");
    });

    test("Register a new user successfully", async ({ loginPage, registrationPage }) => {
        await loginPage.goToLoginSection();
        await loginPage.userSignUp(user.userName, user.userEmail)
        await registrationPage.registerUser(user);   
        await loginPage.verifyAccountCreated();  
        await loginPage.logoutUser();
    });

    test("Delete an existing user", async ({ loginPage }) => {
        await loginPage.goToLoginSection();
        await loginPage.login(user.userEmail, user.password);
        await loginPage.deleteUser();
    });
});