
// Автотесты на страницу авторизации https://login.qa.studio

describe('Проверка авторизации', function() {
    it('Вводим верный логин и верный пароль', function(){
        cy.visit('https://login.qa.studio/'); //переходим на сайт

        cy.get('#mail').type('german@dolnikov.ru'); // а) Ввести правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // б) Ввести правильный пароль
        cy.get('#loginButton').click(); // в) Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // г) Проверить нужный текст 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // и наличие кнопки крестик
    })
    it('Проверка логики восстановления пароля', function(){
        cy.visit('https://login.qa.studio/'); //переходим на сайт

        cy.get('#forgotEmailButton').click(); // а) Нажать «Забыли пароль»
        cy.get('#mailForgot').type('email@domain.ru'); // ввести любой имейл
        cy.get('#restoreEmailButton').click(); // нажать на кнопку восстановить пароль
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверить нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик
    })
    it('Проверка на негативный кейс авторизации (неправильный пароль)', function() {
        cy.visit('https://login.qa.studio/'); //переходим на сайт

        cy.get('#mail').type('german@dolnikov.ru'); // а) Ввести правильный логин
        cy.get('#pass').type('iLoveqastudio2'); // б) Ввести неправильный пароль
        cy.get('#loginButton').click(); // в) Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // г) Проверить нужный текст 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // и наличие кнопки крестик
    })
    it('Проверка на негативный кейс авторизации (неправильный логин)', function() {
        cy.visit('https://login.qa.studio/'); //переходим на сайт

        cy.get('#mail').type('german@do0lnikov.ru'); // а) Ввести правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // б) Ввести неправильный пароль
        cy.get('#loginButton').click(); // в) Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // г) Проверить нужный текст 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // и наличие кнопки крестик
    })
    it('Проверка на негативный кейс валидации', function() {
        cy.visit('https://login.qa.studio/'); //переходим на сайт

        cy.get('#mail').type('germandolnikov.ru'); // а) Ввести неправильный логин (без @)
        cy.get('#pass').type('iLoveqastudio1'); // б) Ввести правильный пароль
        cy.get('#loginButton').click(); // в) Нажать войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // г) Проверить нужный текст 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // и наличие кнопки крестик
    })
    it('Проверка на негативный кейс валидации', function() {
        cy.visit('https://login.qa.studio/'); //переходим на сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // а) Ввести логин с прописными буквами
        cy.get('#pass').type('iLoveqastudio1'); // б) Ввести правильный пароль
        cy.get('#loginButton').click(); // в) Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // г) Проверить нужный текст 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // и наличие кнопки крестик
    })
})




