import { assert } from 'chai';
import createPasswordPage from '../../../page/createPasswordPage'

export default () => {
    createPasswordPage.authElement.waitForDisplayed();
    assert(createPasswordPage.authText(), 'Create New Password');
}