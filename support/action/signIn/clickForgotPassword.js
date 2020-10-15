import signInPage from '../../../page/signInPage'

export default () => {
    signInPage.forgotPasswordLink.waitForDisplayed();
    signInPage.forgotPasswordLink.click();
    browser.pause(500);
}