class forgotPasswordPage {
    get emailField () { return $(`input[name='email']`) }
    get submitButton () { return $('button .MuiButton-label') }
    get authentication () { return $('div h5') }

    authenticationText () {
        return this.authentication.getText();
    }
}

module.exports = new forgotPasswordPage;