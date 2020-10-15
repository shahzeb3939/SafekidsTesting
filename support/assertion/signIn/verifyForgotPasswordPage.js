import forgotPasswordPage from '../../../page/forgotPasswordPage'

export default () => {
    forgotPasswordPage.authentication.waitForDisplayed();
    assert(forgotPasswordPage.authenticationText(), 'Create New Password'); 
    browser.pause(500);
}