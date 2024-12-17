class ExpensePage {

     humbergenButton(){
        return cy.get('.full > .fa')   
     }
     expenseIcon(){
        return cy.contains('Expenses')
        
     }
     descriptionTab(){
        return cy.get('[data-name="name"]')
     }
}
export default ExpensePage