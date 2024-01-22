export {}

describe('Navbar testing', () => {
   it('doit afficher la barre de navigation', ()=> {
       cy.visit("http://localhost:3000/calculatrice");
       cy.get('[data-test="navigation"]').should("exist");
   });
    it('doit mettre en surbrillance le bon élément selon les query params', ()=> {
        cy.visit("http://localhost:3000/calculatrice");
        cy.get('[data-test="line-style"]').should('have.css', 'left', '0%')
        cy.contains('Historique').click();
        cy.get('[data-test="line-style"]').should('have.css', 'left', '33%')
        cy.contains('Convertisseur').click();
        cy.get('[data-test="line-style"]').should('have.css', 'left', '67%')
    });
});

