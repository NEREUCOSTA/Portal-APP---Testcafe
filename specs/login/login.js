import { LoginPage } from '../../pages/login/loginPage';

fixture('Testes Login').page(
	'https://app-portalautomatizadosec4-prd.azurewebsites.net/'
);

test('Login com sucesso', async (t) => {
	await t.resizeWindow(1920, 1080);
	await LoginPage.preencherEmail();
	await LoginPage.preencherSenha();
	await LoginPage.clicarBotaoEntrar();
	await LoginPage.validarHomePage();
});
