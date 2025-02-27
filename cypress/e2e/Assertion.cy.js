/*

describe ('Automation practice - Assertion', function() {

    //it ('Implicit Assertion', function()  {

        //laney grey, vanna bardot, ella rose, cherry kiss, kym graham, alex grey, melody wylde, megan marx

        // using "Should"

        /*
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('contain', 'orangehrm')
        .should('not.contain', 'greenhrm' )

        cy.title('eq', 'OrangeHRM')

        //check visibility of image
        cy.get('.orangehrm-login-branding > img').should('be.visible')

        //check image is exist or not
        cy.get('.orangehrm-login-branding > img').should('exist')

        //pravide value into username
        cy.get('input[name = "username"]').type("Admin")

        //pravide value into password
        cy.get('input[name = "password"]').type("admin123")

        //Click on submit button
        cy.get('.oxd-button').click()
        
    
        it ('explicit Assertion', ()=> {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //pravide value into username
        cy.get('input[name = "username"]').type("Admin")

        //pravide value into password
        cy.get('input[name = "password"]').type("admin123")

         //Click on submit button
         cy.get('.oxd-button').click()

         // using explicit Assertion , compair data with js function
         // create variable for expected value
         let expName = 'Aditi24MCA Singh';
         // identified css path and store in to parameter
         cy.get('p[class = "oxd-userdropdown-name"]').then( (x)=> {
             
            //capture the actual data to created parameter
             let   actName = x.text()

             //compare the actual with expected value
             expect(expName).to.equal(actName)

             //compare the actual with expected value - negative 
             //expect(expName).to.not.equal(actName)

            // using assert compairing data
             assert.equal(expName,actName)
             //assert.notEqual(expName,actName)

             //Click on Admin
             //cy.get('span[class = "oxd-text oxd-text--span oxd-main-menu-item--name"]').click()
            
             cy.get('a.oxd-main-menu-item[href*="admin/viewAdminModule"]').click();


             //select a check box
             //cy.get( 'i[class="oxd-icon bi-dash oxd-checkbox-input-icon"]').should('be.visible')
             //cy.get( 'i[class="oxd-icon bi-dash oxd-checkbox-input-icon"]').check().should('be.checked')
             //cy.get('[ class = "oxd-icon bi-dash oxd-checkbox-input-icon"]').should('be.visible')


             //give inputs to System user text box
             cy.get('div[class="oxd-input-group oxd-input-field-bottom-space"] div input[class="oxd-input oxd-input--active"]').should('be.visible')
             cy.get('div[class="oxd-input-group oxd-input-field-bottom-space"] div input[class="oxd-input oxd-input--active"]').type('admin user')

             //select user role from dropdown 
             cy.get('.oxd-table-filter-area div:nth-child(2) div i').should('be.visible');
             cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').select('Admin')
             //cy.get('.oxd-table-filter-area div:nth-child(2) div i').click('A')
            

            
              
        
             


         })
    })

    })

    */

