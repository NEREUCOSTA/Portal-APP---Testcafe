import { Selector, t } from 'testcafe';
export class LoginPage {
	static async preencherEmail() {
		const email = Selector('input[type="email"].form-control');
		await t.typeText(email, 'renata.abreu@dmsistemas.com.br');
	}

	static async preencherSenha() {
		const senha = Selector('input[type="password"].form-control');
		await t.typeText(senha, 'dev@0033');
	}

	static async clicarBotaoEntrar() {
		await t.click('button[type="submit"]');
	}

	static async validarHomePage() {
		const nomeUsuário = Selector('.pro-user-name');
		await t.expect(nomeUsuário.textContent).contains(' Renata Silva ');
	}

	static async login() {
		await LoginPage.preencherEmail();
		await LoginPage.preencherSenha();
		await LoginPage.clicarBotaoEntrar();
	}
}

// export default LoginPage;
