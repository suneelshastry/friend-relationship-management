# Friends Management Application

![friends-logo](src/assets/svg/friends.svg)

An Application to track friends and the friends network. The current implementation allows user to add friends to the network and visualize the relationship with a network graph of friends.


The repo includes
* Source code
    * State management with NgRx
    * Data visualization with d3
    * UI components from Angular Material
* Unit tests with jasmine/karma
* e2e testing with Cypress
___
## Demo

### Add seed data
![friends-demo1](demo/seed-data.gif)
### Add Friends
![friends-demo2](demo/add-friends.gif)
### Form validation
![friends-demo3](demo/form-validation.gif)
### Error handling
![friends-demo4](demo/error.gif)
### e2e run through cypress
![friends-demo5](demo/e2e.gif)
___
## Application assumptions

1. User can add a person to their friends list by adding their name and their friends name in the list.
1. User can enhance their friends network by consecutively adding friends and their friends.
1. User cannot add the existing friend's information again.

## Future enhancements (Application features and functionalities)

Few enhancements on top of my mind.

1. Adding filter capability to the network graph to filter out and focus on few relationships.
1. Making the application more accessible.
1. Adding externalization and localization of data on the application.
1. Allow user to pick and edit certain relationships.
1.  Ability to export and import friends network.

## Future enhancements (code design and organization)

1. Increasing the unit test coverage throughout.
1. Think outside of the canonical use of the D3 graph. (probably to increase performance)
1. Add sophistication to the graph component to adjust its size upon the volume of data that is being shown.
1. Add logging to the application and more error handling.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
