import signInPage from '../../page/signInPage'

export default () => {
    signInPage.passwordField.waitForDisplayed();
    signInPage.emailField.click();
    signInPage.emailField.setValue('thisIsName@company.com');

    signInPage.passwordField.waitForDisplayed();
    signInPage.passwordField.click();
    signInPage.passwordField.setValue('howTOEnter')
}