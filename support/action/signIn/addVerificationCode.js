import twoFactorAuthenticationPage from '../../../page/twoFactorAuthenticationPage'

export default (authString) => {
    twoFactorAuthenticationPage.fillAuthField(authString);
    twoFactorAuthenticationPage.singInButton.click();
}