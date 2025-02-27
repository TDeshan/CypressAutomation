
///<reference types="cypress" />

describe ('Automation practice - E2E', function() {


    it ('E2E flow of SaurceDemo web application - Login Funtion', ()=> {

                //Login to the Application - Negative path

                cy.visit('https://www.saucedemo.com/')
                cy.screenshot('Home page')
                
                //pravide value into username
                cy.get('input[placeholder = "Username"]').type("standard_user")
                cy.wait(1000);

                //pravide value into password
                cy.get('input[placeholder = "Password"]').type("Tst Test Test")
                cy.wait(1000);
        
                //Click on submit button
                cy.get('input[name = "login-button"]').click()
                cy.wait(2000);

                // veryfy error message
                cy.get('div[class = "error-message-container error"]').should('be.visible')
                cy.wait(2000);
                cy.get('div[class = "error-message-container error"]').screenshot('error message')


    })


    it ('E2E flow of SaurceDemo web application - Login Funtion', ()=> {


                //Login to the Application successfully 


                cy.visit('https://www.saucedemo.com/')

                //pravide value into username
                cy.get('input[placeholder = "Username"]').type("standard_user")
                cy.wait(1000);

                //pravide value into password
                cy.get('input[placeholder = "Password"]').type("secret_sauce")
                cy.wait(1000);
        
                 //Click on submit button
                cy.get('input[name = "login-button"]').click()

                // using explicit Assertion , compair data with js function

                 let expResult = 'Swag Labs'
                 cy.get('div[class = "app_logo"]').then  (  (x)=> {


                 let actResult = x.text()

                 expect(expResult).to.equal(actResult)

                })

                 cy.get('[class="product_sort_container"]').select('Price (low to high)')
                


                // using explicit Assertion , verify the product title 

                 let expResult1 = 'Products'
                 cy.get('span[class = "title"]').then (  (y)=> {


                 let actResult1 = y.text()
                 expect(expResult1).to.equal(actResult1)

                })

                 // Select Item from Product List
                 cy.get('a[id="item_4_title_link"] div[class="inventory_item_name "]').click()
                 cy.wait(1000);
                 
                 // Click on Add to Cart
                 cy.get('button[id="add-to-cart"]').click()
                 cy.wait(1000);

                 // Go to the my cart
                 cy.get('a[class="shopping_cart_link"]').click()
                 cy.wait(2000);
                 
                 // Click on Countinue shopping
                 cy.get('button[id="continue-shopping"]').click()
                 cy.wait(2000);
                 
                 // Remove selected item from cart
                 cy.get('button[id = "remove-sauce-labs-backpack"]').click()
                 cy.wait(2000);

                 // Select Item from Product List
                 cy.get('a[id="item_4_title_link"] div[class="inventory_item_name "]').click()
                 cy.wait(1000);
                 
                 // Click on Add to Cart
                 cy.get('button[id="add-to-cart"]').click()
                 cy.wait(1000);

                 // Go to the my cart
                 cy.get('a[class="shopping_cart_link"]').click()
                 cy.wait(2000);

                 //click on ckeck out
                 cy.get('button[id = "checkout"]').click()
                 

                 // verify the section and enter details of check out section

                 let actcheckResult = 'Checkout: Your Information'
                 cy.get('span[class = "title"]').then ( (i)=>   {

                 let expcheckresult = i.text()
                 expect(expcheckresult).to.equal(actcheckResult)

                })

                 cy.get('input[name = "firstName"]').type('Deshan')
                 cy.wait(1000);

                 cy.get('input[name = "lastName"]').type('Gunarathne')
                 cy.wait(1000);

                 cy.get('input[name = "postalCode"]').type('60400')
                 cy.wait(1000);

                 cy.get('input[id = "continue"]').click()
                 cy.wait(2000);


                // verify the Checkout: Overview section

                 let actovervireResult = 'Checkout: Overview'
                 cy.get('span[class = "title"]').then ( (h)=>   {

                 let expoverviewResult = h.text()
                 expect(expoverviewResult).to.equal(actovervireResult)

                })

                 cy.get('button[id = "finish"]').click()
                 cy.wait(2000);

                //verify the Checkout: Complete!

                 let actCompleteResult = 'Thank you for your order!'
                 cy.get('h2[class = "complete-header"]').then ( (j)=>   {

                 let expCompleteResult = j.text()
                 expect(expCompleteResult).to.equal(actCompleteResult)

                })
                
                cy.get('button[name = "back-to-products"]').click()
                cy.wait(2000);

                //Logout fuctionality
                cy.get('button[id = "react-burger-menu-btn"]').click()
                cy.wait(1000);
                cy.get('a[id ="logout_sidebar_link"]').click()
                cy.wait(1000);


                //test
                //test 2




                })
    
    })
   


