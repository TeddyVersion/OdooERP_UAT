class OdooPage {
    navigate(){
        cy.visit('https://uhhqa.achievewithoutborders.com/')
        this.navigate
     }
     perfLink(){
        return cy.contains('perf_06')
     }
}
export default OdooPage