import Checkers from "../support/checker";
const checker = new Checkers;

describe('Checkers moves', () => {
  beforeEach(() => {
    cy.visit('https://www.gamesforthebrain.com/game/checkers/');
  });

  it('move a coin from one place to another', () => {
    checker.moves();
  });

  it('win the game',() => {
   checker.winGame();
  })
});