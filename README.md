# Automated Testing - Using Cypress

This app shows the BDD and TDD aproach of simple app development.

![Overview](https://github.com/janynnegomes/simple-app-automated-testing-sample/blob/master/screen-captures/capa.png?raw=true)

## Cypress
Cypress is an awesome tool for E2E testing used here to simulate all user's interactions to application to getting all scenarios described on BDD.

![Video](https://github.com/janynnegomes/simple-app-automated-testing-sample/blob/master/screen-captures/cypress-testing.gif?raw=true)

## Known Use Cases

The use cases specify funcional requirements of application, what rules must be applied from users perspective, so we defined it to accomplish the task management of a person.

|ID|Use Case| Status|
|--|--|--|
|1 | As an user, i need to save little tasks to organize my activities. The task must have a title and optionaly a description| [DONE]|
|2 | As an user, i need to see all my tasks in a list. | [DONE] |
|3 | As an user, i need to edit a task. I must keep a title. | [in progress]|
|4 | As an user, i need to discard(remove) a task from list.| |
|5 | As an user, i need to mark the task as done.| [DONE]|

## Mobile Screen Captures

![Mobile](https://github.com/janynnegomes/simple-app-automated-testing-sample/blob/master/screen-captures/mobile-add-task.png?raw=true)


## Install dependencies

Run `npm install`. The project gets all dependencies necessary to run and build the application.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run cypress` to execute the end-to-end tests via Cypress.
