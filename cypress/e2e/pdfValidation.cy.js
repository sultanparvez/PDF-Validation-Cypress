/// <reference types="cypress"/>

describe("PDF Download",()=>{
    it("PDF Download",()=>{
        const downloadFolder = 'cypress/downloads';
        const pdfFileName = 'Free_Test_Data_100KB_PDF.pdf';
        const expectedText = 'Your expected text'
        cy.visit("/")
        cy.wait(2000)
        // cy.get('.ham-burger-menu > .MuiButtonBase-root').click()
        // cy.get("a[href='/about']").click({force: true})
        // cy.get('a[target="_blank"]').invoke('removeAttr', 'target').click({force:true})
        // //*[@id="root"]/div/main/div[2]/section/div[2]/div[2]/a
        cy.get('.elementor-element-1b0c2509 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button').click()
        cy.readFile(`${downloadFolder}/${pdfFileName}`, 'binary').then((pdfContent) => {
           
            cy.get('iframe').then(($iframe) => {
                const iframe = $iframe.contents();
                const pdfText = iframe.find('body').text();
      
              // Now you can perform your assertions on the extracted PDF content
              expect(pdfText).to.contain(expectedText);
            });
        });
        
    })
})