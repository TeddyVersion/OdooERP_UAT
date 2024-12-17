class LoginPage {
   
   emailField(){
    return cy.get('#login')
   } 
   passwordField(){
    return cy.get('#password')
   }
   loginButton(){
   
    return cy.get('.clearfix > .btn')
   }
   errorMessage(){
    return cy.get('.alert')
   }
   navigateToLogin(){
      cy.visit('https://uhhqa.achievewithoutborders.com/web?db=perf_06142022')
   }
}
export default LoginPage