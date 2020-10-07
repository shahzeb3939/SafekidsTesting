class signInPage {
    get emailField () { return $(`input[name='email']`) }
    get passwordField () { return $(`input[name='password']`) }
    get signInButton () { return $('button .MuiButton-label') }
    get authentication () { return $('div h5') }
    
    authenticationText () {
        return this.authentication.getText();
    }
}

module.exports = new signInPage;