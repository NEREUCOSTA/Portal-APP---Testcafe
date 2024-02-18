import { Selector, t } from 'testcafe';

export class PedidosPage {
	static async selecionarStatus(statusInput) {
		// Declaração de variáveis
		const seletorStatus = Selector(
			'#tickets-table_length > ng-select > div > div > div.ng-input > input[type=text]'
		);
		const status = Selector(`[ng-reflect-ng-item-label="${statusInput}"]`);

		//Ações TestCafe
		await t.click(seletorStatus).click(status);
	}
	static async selecionaGrupoEconomico(grupoEconomicoInput) {
		// Declaração de variáveis
		const seletorGrupoEconomico = Selector(
			'#dropbox-order-filter > ng-select'
		).nth(2);
		const grupoEconomico = Selector('div.ng-option > span').withText(
			grupoEconomicoInput
		);
		//Ações TestCafe
		await t.click(seletorGrupoEconomico).click(grupoEconomico);
	}

	static async filtrarPedidos() {
		// Declaração de variáveis
		const botaoFiltrar = Selector('button[type="submit"]');

		//Ações TestCafe
		await t.click(botaoFiltrar);
	}

	static async selecionarOperadora(operadoraInput) {
		const operadora = Selector('tr > .text-capitalize').withText(
			operadoraInput
		);

		await t.click(operadora);
	}

	static async clicaBotaoVerItens() {
		const botaoVerItens = Selector('a').withText('Ver itens');

		await t.click(botaoVerItens);
	}

	static async clicaBotaoVerPedido() {
		// ver detalhes do pedido
		const botaoVerPedido = Selector('a').withText('Ver pedido');

		await t.click(botaoVerPedido);
	}
}
