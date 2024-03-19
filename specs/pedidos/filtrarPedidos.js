import { PedidosPage } from '../../pages/Pedidos/pedidosPage';
import { LoginPage } from '../../pages/login/loginPage';

fixture('Testes Pedidos').page('https://app.audaztec.com.br/');

test('Filtro por grupo econômico', async (t) => {
	await t.resizeWindow(1920, 1080);
	// Realiza o login
	await LoginPage.login();

	// Acessa a página de pedidos
	await t.navigateTo(
		'https://app.audaztec.com.br/recharge-order-list-operator'
	);

	// ============== Realiza o filtro de pedidos ================
	const grupoEconomicoInput =
		'Job Finders Gestão Em Recursos Humanos Ltda / 02.334.507/0001-07'; // A inicial dos nomes deve ser maiúscula

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
