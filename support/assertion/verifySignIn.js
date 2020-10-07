import { assert } from 'chai';
import signInPage from '../../page/signInPage'

export default () => {
    signInPage.authentication.waitForDisplayed();
    assert(signInPage.authenticationText(), 'Two-Factor Authentication');
}