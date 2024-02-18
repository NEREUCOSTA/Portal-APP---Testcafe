import { Selector, t } from 'testcafe';

export class DetalhesDoPedidoPage {
	// ============== Anexar Documentos ================

	static async clicaBotaoAnexar() {
		const botaoAnexar = Selector('[title="Anexar arquivo"]');

		await t.click(botaoAnexar);
	}

	static async selecionaAnexo(tipoDeAnexoInput) {
		const seletorDeTipoDeAnexo = Selector('div.ng-input');
		const tipoDeAnexo = Selector('div.ng-option').withText(
			`${tipoDeAnexoInput}`
		);

		await t.click(seletorDeTipoDeAnexo).click(tipoDeAnexo);
	}

	static async enviarDocumentoAnexado() {
		const botaoEnviarDocumentoAnexado = Selector('button').withText('Enviar');

		await t.expect(botaoEnviarDocumentoAnexado.visible).ok();
		// await t.click(botaoEnviarDocumentoAnexado);
	}

	// ============== Trativa de Inconsistência ================

	static async selecionaSubmenu(submenuInput) {
		const submenu = Selector('a.nav-link').withText(`${submenuInput}`);
		await t.click(submenu);
	}
	static async clicaBotaoTratar() {
		const botaoTratarInconsistencia = Selector('button')
			.withText('Tratar')
			.nth(0);

		await t.click(botaoTratarInconsistencia);
	}

	static async preencheFormularioDeTratativa() {
		const campoTratativa = Selector('div.ng-select-container').nth(0);
		const opcaoTratativa = Selector('div.ng-option').withText(
			'Cartão solicitado na operadora'
		);

		const campoTipoDeTratativa = Selector('div.ng-select-container').nth(1);
		const opcaoTipoDeTratativa = Selector('span.ng-option-label').withText(
			'Permite compra sem a retirada do cartão'
		);
		const campoSelecionaData = Selector('input.form-control.date');
		const data = Selector('div.btn-light').withText('15');
		await t
			.click(campoTratativa)
			.click(opcaoTratativa)
			.click(campoTipoDeTratativa)
			.click(opcaoTipoDeTratativa)
			.click(campoSelecionaData)
			.click(data);
	}
	static async concluirTratativaDeInconsistencia() {
		const botaoConcluirTratativa = Selector('button').withText('Concluir');

		await t.expect(botaoConcluirTratativa.visible).ok();
		// await t.click(botaoConcluirTratativa);
	}

	// ============== Solicitação de Logística ================

	static async aumentaNumeroDePedidosPorPagina(numeroDePedidosPorPeginaInput) {
		const seletorPedidosPorPagina = Selector(
			'select.custom-select.custom-select-sm.form-control.form-control-sm.mx-2.ng-untouched.ng-pristine.ng-valid'
		);
		const numeroDePedidosPorPegina = Selector(
			'#tickets-table_length > label > select > option'
		).withText(`${numeroDePedidosPorPeginaInput}`);

		await t.click(seletorPedidosPorPagina).click(numeroDePedidosPorPegina);
	}

	static async selecionaItemParaSolicitacaoDeLogisitica(ordemDoItemInput) {
		const botaoSolicitarLogistica = Selector('label.custom-control-label').nth(
			ordemDoItemInput
		);
		await t.click(botaoSolicitarLogistica);
	}

	static async solicitaLogisticaDosItensSelecionados() {
		const botaoSolicitarLogistica = Selector('button').withText(
			'Solicitar Logística'
		);
		await t.click(botaoSolicitarLogistica);
	}

	static async preencheFormularioDeSolicitacaoDeLogistica() {
		const campoPostoDeColeta = Selector('div.ng-input').nth(0);
		const opcaoPostoDeColeta = Selector('span.ng-option-label').withText(
			'JOÃO RAMALHO'
		);
		const observacao = Selector(
			'textarea.form-control.ng-untouched.ng-pristine.ng-valid'
		);

		await t
			.click(campoPostoDeColeta)
			.click(opcaoPostoDeColeta)
			.typeText(observacao, 'Teste de observação');
	}
	static async enviaFormularioDeSolicitacaoDeLogistica() {
		const botaoEnviarSolicitacao = Selector('button').withText(
			'Solicitar Logística'
		);

		await t.expect(botaoEnviarSolicitacao.visible).ok();
	}
}
