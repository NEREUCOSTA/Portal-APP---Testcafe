import { PASSWORD, USERNAME } from '../env_variables.js';

export default class LoginAPI {
	static async login() {
		// URL da API de login
		const loginUrl =
			'https://app-portalautomatizadosec4-prd.azurewebsites.net/api/Auth/authenticate';
		// Fazer uma solicitação de login
		const response = await t.request(loginUrl, {
			method: 'post',
			body: {
				username: USERNAME,
				password: PASSWORD,
			},
			headers: {
				'Content-Type': 'application/json',
			},
		});

		// Verificar se a solicitação foi bem-sucedida
		await t.expect(response.statusCode).eql(200);

		// Armazenar o token de acesso
		const body = response.body;
		const token = response.body.token;

		console.log(body);
		console.log('Token: ' + token);

		// Usar o token de acesso conforme necessário nos testes seguintes

		return response;
	}
}
