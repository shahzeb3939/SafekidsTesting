import signUpPage from '../../../page/signUpPage'

export default () => {
    signUpPage.firstNameField.waitForDisplayed();
    signUpPage.firstNameField.click();
    signUpPage.firstNameField.setValue('kid')

    signUpPage.lastNameField.waitForDisplayed();
    signUpPage.lastNameField.click();
    signUpPage.lastNameField.setValue('lastkid')

    signUpPage.emailField.waitForDisplayed();
    signUpPage.emailField.click();
    signUpPage.emailField.setValue('kid@company.com')

    signUpPage.passwordField.waitForDisplayed();
    signUpPage.passwordField.click();
    signUpPage.passwordField.setValue('nopassword')

    browser.pause(2000);
    signUpPage.signUpButton.click();
    browser.pause(2000);
}