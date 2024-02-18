import { PedidosPage } from '../../pages/Pedidos/pedidosPage';
import { LoginPage } from '../../pages/login/loginPage';
import { DetalhesDoPedidoPage } from '../../pages/pedidos/detalhesDoPedidoPage';

fixture('Testes Pedidos').page(
	'https://app-portalautomatizadosec4-prd.azurewebsites.net/'
);

test('Solicitar logística', async (t) => {
	// Realiza o login
	await LoginPage.login();

	// Acessa a página de pedidos
	await t.navigateTo(
		'https://app-portalautomatizadosec4-prd.azurewebsites.net/recharge-order-list-operator'
	);

	// ============== Realiza o filtro de pedidos ================
	const statusInput = 'Confirmado pela operadora/Conc';
	const grupoEconomicoInput =
		'Prelease-Associacao Educacional Pentagono / 49.205.616/0001-98'; // A inicial dos nomes deve ser maiúscula
	const operadora =
		' AESA - ELETRÔNICO - Responsável VT: Fernando Henrique Dias';

	await PedidosPage.selecionaGrupoEconomico(grupoEconomicoInput);
	await PedidosPage.selecionarStatus(statusInput);
	await PedidosPage.filtrarPedidos();

	// ============== Navega até a tela do pedido ================

	await PedidosPage.selecionarOperadora(operadora);
	await PedidosPage.clicaBotaoVerItens();
	await PedidosPage.clicaBotaoVerPedido();

	// ============== Solicitação de Logística ================

	await DetalhesDoPedidoPage.aumentaNumeroDePedidosPorPagina(50);
	await DetalhesDoPedidoPage.selecionaItemParaSolicitacaoDeLogisitica(1);
	await DetalhesDoPedidoPage.solicitaLogisticaDosItensSelecionados();

	// ============== Preenche o furmulário de solicitação de logística ================

	await DetalhesDoPedidoPage.preencheFormularioDeSolicitacaoDeLogistica();
	await DetalhesDoPedidoPage.enviaFormularioDeSolicitacaoDeLogistica();
});
