import gotoSafekids from '../../support/action/signIn/gotoSafekids'
import clickForgotPassword from '../../support/action/signIn/clickForgotPassword'
import verifyForgotPasswordPage from '../../support/assertion/signIn/verifyForgotPasswordPage'


describe('Safekids SignIn Forgot Password Test', function () {

    it ('Should go to Safekids App Home Page', () => {
        gotoSafekids();
    })
    
    it (`Should click 'Forgot Password'`, () => {
        clickForgotPassword();
    })

    it ('Should verify Forgot Password Page', () => {
        verifyForgotPasswordPage();
    })

})