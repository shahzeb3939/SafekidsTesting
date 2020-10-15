class createPasswordPage {
    get authElement () { return $('div > h5') }
    get passwordField () { return $(`input[name='password']`) }
    get submitButton () { return $('button .MuiButton-label') }

    authText () {
        return this.authElement.getText();
    }
}

module.exports = new createPasswordPage;