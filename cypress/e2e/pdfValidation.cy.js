/// <reference types="cypress"/>
// const pdfParse = require('pdf-parse');


describe("PDF Download",()=>{
    it("PDF Download",()=>{
        const expectedText = 'Lorem ipsum'
        cy.visit("/")
        cy.wait(2000)
        cy.get('.elementor-element-1b0c2509 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').click()

        
    })
})
