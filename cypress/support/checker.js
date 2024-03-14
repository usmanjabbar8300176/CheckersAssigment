class Checkers {
    getFirstCoin(){
        return cy.get('[name="space62"]')
    }

    getMoveFirstCoin(){
        return cy.get('[name="space53"]')
    }

    getSecondCoin(){
       return cy.get('[name="space22"]')
    }

    getMoveSecondCoin(){

        return cy.get('[name="space33"]')
    }

    getThirdCoin (){
        return cy.get('[name="space02"]')
    }

    getMoveThirdCoin (){
        return cy.get('[name="space24"]')
    }
    getForthCoin (){
        return cy.get('[name="space31"]')
    }

    getMoveForthCoin (){
        return cy.get('[name="space22"]')
    }

    getFifthCoin () {
        return cy.get('[name="space40"]')
    }

    getMoveFifthCoin () {
        return cy.get('[name="space22"]')
    }
    getMove1(){
        return cy.get('[name="space02"]')
    }

    getMove2() {
        return cy.get('[name="space13"]')
    }

    getMove3() {
        return cy.get('[name="space11"]')

    }
    getMove4() {
        return cy.get('[name="space00"]')
    }

    getMove5() {
        return cy.get('[name="space42"]')
    }
    getMove6 () {
        return cy.get('[name="space53"]')
    }

    getMove7 (){
        return cy.get('[name="space44"]')
    }
    getMove8 (){
        return cy.get('[name="space35"]')
    }
    getMove9 () {
        return cy.get('[name="space20"]')
    }
    getMove10 () {
        return cy.get('[name="space04"]')
    }
    getMove11 (){
        return cy.get('[name="space26"]')
    }
    getMove12 () {
        return cy.get('[name="space17"]')
    }
    getMove13 (){
        return cy.get('[name="space37"]')
    }
    getMove14 () {
        return cy.get('[name="space46"]')
    }
    getVerifyWonText (){
        return cy.get('[id="message"]')
    }


    moves(){
    this.getFirstCoin().click();
    this.getMoveFirstCoin().click().wait(3000);
    this.getSecondCoin().click();
    this.getMoveSecondCoin().click({force:true}).wait(3000);
    this.getThirdCoin ().click();
    this.getMoveThirdCoin ().click().wait(5000);
    this.getForthCoin ().click();
    this.getMoveForthCoin ().click().wait(3000);
    this.getFifthCoin ().click();
    this.getMoveFifthCoin ().click().wait(3000)


    

    }
    winGame(){
        this.getMove1().click();
        this.getMove2().click().wait(3000);
        this.getMove3().click();
        this.getMove1().click().wait(3000);
        this.getMove4() .click();
        this.getMove3().click().wait(3000);
        this.getMove5().click();
        this.getMoveThirdCoin ().click().wait(3000);
        this.getForthCoin ().click();
        this.getMove5().click().wait(3000);
        this.getMove5().click();
        this.getMove6 ().click().wait(3000);
        this.getSecondCoin().click();
        this.getMove7 ().click().wait(3000);
        this.getMoveThirdCoin ().click();
        this.getMove8 ().click().wait(3000);
        this.getMove2().click();
        this.getMove8 ().click().wait(3000);
        this.getMove3().click();
        this.getSecondCoin().click().wait(3000);
        this.getMove9 ().click();
        this.getMove3().click().wait(3000);
        this.getFifthCoin ().click();
        this.getForthCoin ().click().wait(3000);
        this.getSecondCoin().click();
        this.getMove2().click().wait(3000);
        this.getMove2().click();
        this.getMove10 ().click().wait(3000);
        this.getMove8 ().click();
        this.getMove11 ().click().wait(3000);
        this.getMove11 ().click();
        this.getMove12 ().click().wait(3000);
        this.getMove10 ().click();
        this.getMove11 ().click().wait(3000);
        this.getForthCoin ().click();
        this.getMove5().click().wait(3000);
        this.getMove13 ().click();
        this.getMove14 ().click().wait(3000);
        this.getMove11 ().click();
         this.getMove13 ().click().wait(3000);
         this.getMove13 ().click();
        this.getMove14 ().click().wait(3000);
        this.getMove1().click();
        this.getMoveThirdCoin ().click().wait(3000);
        this.getMove3().click();
        this.getMoveSecondCoin().click().wait(5000);
        this.getVerifyWonText ().should('contain', 'You have won!');

    }
    
}

export default Checkers;

