import signInPage from '../../../page/signInPage'

export default () => {
    signInPage.signInButton.waitForDisplayed();
    signInPage.signInButton.click();
    browser.pause(3000)
}