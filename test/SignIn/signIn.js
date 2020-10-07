import gotoSafekids from '../../support/action/signIn/gotoSafekids'
import enterSignInCredentials from '../../support/action/signIn/enterSignInCredentials'
import clickSignIn from '../../support/action/signIn/clickSignIn'
import verifySignIn from '../../support/assertion/signIn/verifySignIn'

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

})