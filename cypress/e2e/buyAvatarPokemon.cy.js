// Автотесты на покупку аватара в Покемонах

describe('Покупка аватара в Покемонах', function() {
    it('e2e путь по покупке аватара', function() {
        cy.visit('https://pokemonbattle.ru/'); // заходим на сайт https://pokemonbattle.ru/

        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // вводим логин
        cy.get('#password').type('USER_PASSWORD'); // вводим пароль
        cy.get('.auth__button').click(); // нажимаем войти
        cy.wait(2000); // ждём 2 секунды
        cy.get('.header__container > .header__id').click(); // намимаем на кнопку профиля
        cy.get('[href="/shop"]').click();  // нажимаем на кнопку сменить аватар
        cy.get('.available > button').first().click({ force: true });
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4960143531629838'); // вводим номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('0926'); // вводим срок карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // вводим CVV
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Jayden Christopher'); // вводим имя владельца карты
        cy.get('.pay-btn').click(); // жмём оплатить
        cy.get('#cardnumber').type('56456'); //вводим код из пуша для подтверждения операции
        cy.get('.payment__submit-button').click(); //отправить номер из пуша
        cy.contains('Покупка прошла успешно').should('be.visible');
    })
})