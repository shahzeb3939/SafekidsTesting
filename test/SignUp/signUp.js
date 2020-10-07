import gotoSignUp from '../../support/action/signUp/gotoSignUp'
import enterSignUpCredentials from '../../support/action/signUp/enterSignUpCredentials'

describe('Safekids SignUp Test', function () {

    it ('Should goto SignUp Page', () => {
        gotoSignUp();
    })
    
    it ('Should test input fields', () => {
        enterSignUpCredentials();
    })

})