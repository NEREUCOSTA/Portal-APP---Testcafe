import { PedidosPage } from '../../pages/Pedidos/pedidosPage';
import { LoginPage } from '../../pages/login/loginPage';
import { DetalhesDoPedidoPage } from '../../pages/pedidos/detalhesDoPedidoPage';

fixture('Testes Pedidos').page('https://app.audaztec.com.br/');

test('Inclusão de TED', async (t) => {
	await t.resizeWindow(1920, 1080);
	// Realiza o login
	await LoginPage.login();

	// Acessa a página de pedidos
	await t.navigateTo(
		'https://app.audaztec.com.br/recharge-order-list-operator'
	);

	// ============== Realiza o filtro de pedidos ================
	const statusInput = 'Confirmado pela operadora/Conc';
	const grupoEconomicoInput =
		'Prelease-Associacao Educacional Pentagono / 49.205.616/0001-98'; // A inicial dos nomes deve ser maiúscula

	await PedidosPage.selecionaGrupoEconomico(grupoEconomicoInput);
	await PedidosPage.selecionarStatus(statusInput);
	await PedidosPage.filtrarPedidos();

	// ============== Navega até a tela do pedido ================
	const operadora =
		' AESA - ELETRÔNICO - Responsável VT: Fernando Henrique Dias';

	await PedidosPage.selecionarOperadora(operadora);
	await PedidosPage.clicaBotaoVerItens();
	await PedidosPage.clicaBotaoVerPedido();

	// ============== Anexa o arquivo ================

	const tipoDeAnexo = 'TED';

	await DetalhesDoPedidoPage.clicaBotaoAnexar();
	await DetalhesDoPedidoPage.selecionaAnexo(tipoDeAnexo);
	await DetalhesDoPedidoPage.enviarDocumentoAnexado();
});
