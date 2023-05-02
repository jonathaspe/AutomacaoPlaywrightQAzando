Feature('login');

Scenario('Login com sucesso',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'testejonathas@gmail.com')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)
}).tag('sucesso')

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'testejonathas@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.', 3)
    
}).tag('mensagemErroSenha')

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 3)
}).tag('mensagemErroEmail')

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 3)
    
}).tag('mensagemErroEmail')