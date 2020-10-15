class twoFactorAuthenticationPage {
    get singInButton () { return $('button .MuiButton-label') }
    // get authFeild () { return $(`div > input:nth-child(${c})`)}

    get firstAuthField () { return $('div > input:nth-child(1)') }
    get secondAuthField () { return $('div > input:nth-child(2)') }
    get thirdAuthField () { return $('div > input:nth-child(3)') }
    get fourthAuthField () { return $('div > input:nth-child(4)') }
    get fifthAuthField () { return $('div > input:nth-child(5)') }
    get sixthAuthField () { return $('div > input:nth-child(6)') }

    fillAuthField (num) {
        for (var i=0;i<num.length;i++) {
            $(`div > input:nth-child(${i+1})`).waitForDisplayed();
            $(`div > input:nth-child(${i+1})`).click();
            $(`div > input:nth-child(${i+1})`).setValue(num.split('')[i]);
        }
    }
}

module.exports = new twoFactorAuthenticationPage;