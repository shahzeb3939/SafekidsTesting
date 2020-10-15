import createPasswordPage from '../../../page/createPasswordPage'

export default () => {
    createPasswordPage.passwordField.waitForDisplayed();
    createPasswordPage.passwordField.click();
    createPasswordPage.passwordField.setValue('nopassword');
    browser.pause(1000);
    createPasswordPage.submitButton.waitForDisplayed();
    createPasswordPage.submitButton.click();
}