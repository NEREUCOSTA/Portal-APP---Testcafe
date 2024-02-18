import { PedidosPage } from '../../pages/Pedidos/pedidosPage';
import { LoginPage } from '../../pages/login/loginPage';
import { DetalhesDoPedidoPage } from '../../pages/pedidos/detalhesDoPedidoPage';

fixture('Testes Pedidos').page(
	'https://app-portalautomatizadosec4-prd.azurewebsites.net/'
);

test('Tratar inconsistência', async (t) => {
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

	await PedidosPage.selecionaGrupoEconomico(grupoEconomicoInput);
	await PedidosPage.selecionarStatus(statusInput);
	await PedidosPage.filtrarPedidos();

	// ============== Navega até a tela do pedido ================
	const operadora =
		' AESA - ELETRÔNICO - Responsável VT: Fernando Henrique Dias';

	await PedidosPage.selecionarOperadora(operadora);
	await PedidosPage.clicaBotaoVerItens();
	await PedidosPage.clicaBotaoVerPedido();

	// ============== Realiza Tratativa de Inconsistência ================
	const submenu = 'Inconsistência';

	await DetalhesDoPedidoPage.selecionaSubmenu(submenu);
	await DetalhesDoPedidoPage.clicaBotaoTratar();
	await DetalhesDoPedidoPage.preencheFormularioDeTratativa();
	await DetalhesDoPedidoPage.concluirTratativaDeInconsistencia();
});
