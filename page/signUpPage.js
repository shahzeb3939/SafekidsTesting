class signUpPage {
    get firstNameField () { return $(`input[name='firstName']`) }
    get lastNameField () { return $(`input[name='lastName']`) }
    get emailField () { return $(`input[name='email']`) }
    get passwordField () { return $(`input[name='password']`) }
    get signUpButton () { return $('button .MuiButton-label') }
}

module.exports = new signUpPage;