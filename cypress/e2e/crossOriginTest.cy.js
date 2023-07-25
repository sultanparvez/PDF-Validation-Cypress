/// <reference types="cypress"/>

describe("Cross-Origin",()=>{
    it("Cross-origin",()=>{
        cy.visit("https://sultanparvez.me/")
        cy.get('.i-github').invoke('removeAttr', 'target').click()  
    })
})