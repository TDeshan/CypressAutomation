/*

///< reference types = "Cypress" />  




describe ('Automation practice', function() {

it.skip ('steps to login and search', function()  {

cy.visit("http://www.automationpractice.pl/index.php")

cy.get('input[id = "search_query_top"]').type("T-Shirt")

cy.get('button[name = "submit_search"]').click()

cy.get('span[class = "lighter"]').contains("T-Shirt")
 

})

it.skip ("dropdown selector  ", function() {

    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

    cy.get('span[id = "select2-billing_country-container"]').click()
    cy.get('input[class = "select2-search__field"]').type('Sri Lanka').type('{Enter}').should('have.text', 'Sri Lanka')
    //cy.get('input[class = "select2-search__field"]').type('Sri Lanka').should('have.text', 'Sri Lanka')




})

it ("dynamic auto suggestion dropdown ", function() {

    cy.visit("https://www.google.com/")

    cy.get('textarea[name = "q"]').type('cypress automation')
    

})

})

*/
