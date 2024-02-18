import { LoginPage } from '../../pages/login/loginPage';

fixture('Testes Login').page(
	'https://app-portalautomatizadosec4-prd.azurewebsites.net/'
);

test('Login com sucesso', async (t) => {
	await LoginPage.preencherEmail();
	await LoginPage.preencherSenha();
	await LoginPage.clicarBotaoEntrar();
	await LoginPage.validarHomePage();
});
