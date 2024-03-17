import { PedidosPage } from '../../pages/Pedidos/pedidosPage';
import { LoginPage } from '../../pages/login/loginPage';

fixture('Testes Pedidos').page(
	'https://app-portalautomatizadosec4-prd.azurewebsites.net/'
);

test('Filtro por grupo econômico', async (t) => {
	await t.resizeWindow(1920, 1080);
	// Realiza o login
	await LoginPage.login();

	// Acessa a página de pedidos
	await t.navigateTo(
		'https://app-portalautomatizadosec4-prd.azurewebsites.net/recharge-order-list-operator'
	);

	// ============== Realiza o filtro de pedidos ================
	const grupoEconomicoInput =
		'Prelease-Associacao Educacional Pentagono / 49.205.616/0001-98'; // A inicial dos nomes deve ser maiúscula

	await PedidosPage.selecionaGrupoEconomico(grupoEconomicoInput);
	await PedidosPage.filtrarPedidos();
});

test('Filtro por status', async (t) => {
	await t.resizeWindow(1920, 1080);
	// Realiza o login
	await LoginPage.login();

	// Acessa a página de pedidos
	await t.navigateTo(
		'https://app-portalautomatizadosec4-prd.azurewebsites.net/recharge-order-list-operator'
	);

	// ============== Realiza o filtro de pedidos ================
	const statusInput = 'Confirmado pela operadora/Conc';

	await PedidosPage.selecionarStatus(statusInput);
	await PedidosPage.filtrarPedidos();
});
