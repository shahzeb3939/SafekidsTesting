import gotoSafekids from '../../support/action/gotoSafekids'
import enterCredentials from '../../support/action/enterCredentials'
import clickSignIn from '../../support/action/clickSignIn'
import verifySignIn from '../../support/assertion/verifySignIn'

describe ('Safekids App Test', function () {
    
    it ('Should go to Safekids App Home Page', () => {
        gotoSafekids();
    })

    it ('Should SignIn with valid credentials', () => {
        enterCredentials();
        clickSignIn();
    })

    it ('Should verify expected results', () => {
        verifySignIn();
    })

})