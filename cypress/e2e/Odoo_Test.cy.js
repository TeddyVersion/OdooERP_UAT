
/*
- import page object models 
*/ 

import OdooPage from '../PageObject/OdooPage'
import LoginPage from '../PageObject/LoginPage'
import HomePage from '../PageObject/HomePage'
import ExpensePage from '../PageObject/ExpensePage'

describe("Suite", function(){
  const odoo = new OdooPage
  const login = new LoginPage()
  const homepage = new HomePage()
  const expense = new ExpensePage()
  let user 

  beforeEach(()=>{ 
    login.navigateToLogin()
  })

  before(()=>{
    odoo.navigate()
    odoo.perfLink().click()
    cy.fixture("Testfile.json").then((data) => {
            user=data
        });
})

// Login page Test Scenarios 
  it('Verify with incorrect email and incorrect password', ()=>{
    login.emailField().type(user.incorrectEmail)
    login.passwordField().type(user.incorrectPassword)
    login.loginButton().click()
    login.errorMessage().should('be.visible')

})

it('Verify with correct email and incorrect password', ()=>{
    
    login.emailField().type(user.correctEmail);
    login.passwordField().type(user.incorrectPassword)
    login.loginButton().click()
    login.errorMessage().should('be.visible')

}) 

it('Verify with incorrect email and correct password', ()=>{

   login.emailField().type(user.incorrectEmail)
   login.passwordField().type(user.correctPassword)
   login.loginButton().click()
   login.errorMessage().should('be.visible')
})  
  
it('Verify with correct email and correct password', ()=>{
  
    login.emailField().type(user.correctEmail)
    login.passwordField().type(user.correctPassword)
    login.loginButton().click() 
    expense.humbergenButton().should('be.visible')
        
})

it('gotoExpensePage', () => {
    login.emailField().type(user.correctEmail)
    login.passwordField().type(user.correctPassword)
    login.loginButton().click() 
    expense.humbergenButton().click()
})
  /*
  Check if the items on the description tab sorted alphabetically
  */
it('check if the list is sorted alphabetically by Description', () => {
  
  login.emailField().type(user.correctEmail)
  login.passwordField().type(user.correctPassword)
  login.loginButton().click() 
  expense.humbergenButton().click()
  expense.expenseIcon().click()
  expense.descriptionTab().click()
/*

Find table expense and locate columen Description 

*/ 
 cy.get('td[class="o_data_cell o_field_cell o_list_char o_required_modifier"]')
  .should(($cells)=>{
   const data = Cypress._.map($cells, ($c)=>$c.innerText).map(s=>new Description(s))
    .map((d) => d.getText())
     const sorted = Cypress._.sortBy(data)
     expect(sorted).to.deep.equal(data)
     cy.log(sorted) 

  })  


})  
    })

    // --- end of Test ---
    