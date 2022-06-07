/// <reference types="cypress"/>
it("test something for github actions", ()=>{
   cy.visit("http://localhost:3000/") 
   cy.get('h1').should('have.text', 'THINGS TO DO')
})