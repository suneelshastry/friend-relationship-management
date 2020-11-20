import { FriendWorkflow } from './workflows/add-friend';

describe('Add-friend e2e tests', () => {
  it('Should load add-friends page', () => {
    cy.visit('/');
    cy.contains('Add Friend Details');
    cy.contains('Your Friends Network');
  });

  it('should add friends upon valid input', () => {
    FriendWorkflow.addFriends();
    FriendWorkflow.clickAddFriendButton();
    cy.get('.node').should('have.length', 6);
    cy.get('.label').should('have.length', 6);
    cy.get('.link').should('have.length', 5);
  });

  it('should not allow to add friend upon incomplete input', () => {
    cy.visit('/');
    FriendWorkflow.clickAddFriendButton();
    cy.get('form').should('have.class', 'ng-invalid');
  });

  it('should rest form upon rest button click', () => {
    cy.visit('/');
    FriendWorkflow.addFriendData({
      name: 'Tom',
      friends: ['july'],
      age: 30,
      weight: 78,
    });
    FriendWorkflow.clickResetButton();
    FriendWorkflow.clickAddFriendButton();

    cy.get('form').should('have.class', 'ng-invalid');
  });
});
