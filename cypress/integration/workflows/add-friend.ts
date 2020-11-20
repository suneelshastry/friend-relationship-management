export class FriendWorkflow {
  static friends = [
    {
      name: 'chandler',
      friends: ['monica', 'phoebe', 'joey'],
      age: 30,
      weight: 86,
    },
    {
      name: 'joey',
      friends: ['ross', 'rachel'],
      age: 30,
      weight: 86,
    },
  ];

  static addFriends() {
    this.friends.forEach((person) => {
      this.addFriendData(person);
      this.clickAddFriendButton();
    });
  }

  static addFriendData(person) {
    cy.get('.name').type(person.name);
    person.friends.forEach((friend) => {
      cy.get('.friends').type(friend).type('{enter}');
    });

    cy.get('.age').type(person.age.toString()).type('{uparrow}');

    cy.get('.weight').type(person.weight.toString()).type('{uparrow}');
  }

  static clickAddFriendButton(): void {
    cy.get('.add-friend').click();
  }

  static clickResetButton(): void {
    cy.get('.reset').click();
  }
}
