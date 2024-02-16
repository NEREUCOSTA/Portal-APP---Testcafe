import { Selector, t } from 'testcafe';

class LoginAPP {

    static async preencherEmail(){
        const email = Selector('.form-control ng-valid ng-dirty ng-touched').nth(0);
        await t
        .typeText(email, 'renata.abreu@dmsistemas.com.br')
                        
    }

    static async preencherSenha(){
        const senha = Selector('.form-control ng-valid ng-dirty ng-touched').nth(1);
        await t
        .typeText(senha, 'dev@0033')
    }

    static async clicarBotaoEntrar(){
        await t
        .click('.btn btn-primary waves-effect waves-light mt-3 btn-block');
    }

    static validarHomePage(){
        
        cy.get(':nth-child(1) > .card > .card-body > .waves-effect > .card-title').contains('Grupo Econômico')
    }
}  export default LoginAPP;