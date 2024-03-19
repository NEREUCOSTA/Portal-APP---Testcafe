import { Selector, t } from 'testcafe';
import { PASSWORD, USERNAME } from '../../env_variables';
export class LoginPage {
	static async preencherEmail() {
		const email = Selector('input[type="email"].form-control');
		await t.typeText(email, USERNAME);
	}

	static async preencherSenha() {
		const senha = Selector('input[type="password"].form-control');
		await t.typeText(senha, PASSWORD);
	}

	static async clicarBotaoEntrar() {
		await t.click('button[type="submit"]');
	}

	static async validarHomePage() {
		const nomeUsuário = Selector('.pro-user-name');
		await t.expect(nomeUsuário.textContent).contains(' Nereu Nogueira ');
	}

	static async login() {
		await LoginPage.preencherEmail();
		await LoginPage.preencherSenha();
		await LoginPage.clicarBotaoEntrar();
	}
}
