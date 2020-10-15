import gotoSafekids from '../../support/action/signIn/gotoSafekids'
import enterSignInCredentials from '../../support/action/signIn/enterSignInCredentials'
import clickSignIn from '../../support/action/signIn/clickSignIn'
import verifySignIn from '../../support/assertion/signIn/verifySignIn'
import addVerificationCode from '../../support/action/signIn/addVerificationCode'
import verifyCreatePasswordPage from '../../support/assertion/signIn/verifyCreatePasswordPage'
import addNewPassword from '../../support/action/signIn/addNewPassword'

describe ('Safekids SignIn Test', function () {
    
    it ('Should go to Safekids App Home Page', () => {
        gotoSafekids();
    })

    it ('Should SignIn with valid credentials', () => {
        enterSignInCredentials();
        clickSignIn();
    })

    it ('Should verify expected results', () => {
        verifySignIn();
    })

    it ('Should add 6 digit verification code to the authentication field', () => {
        addVerificationCode('192205');
        verifyCreatePasswordPage();
    })

    it ('Should create new password', () => {
        addNewPassword();
    })

})