### Automation Camp Store
QualityWorks UI Automation Bootcamp Project

### Dependencies
1. NodeJS v12, v14 or above
3. NPM v6 or above
3. Chrome browser

## Getting Started
Clone the repository & install dependencies
```sh
$ git clone 
$ cd ui-automationcamp-proj-main
$ npm install
```
# Folder Structure
- **cypress-ui-autocamp-store/e2e/page:** Page object files which include element selectors and functions that are used in tests.
- **cypress-ui-autocamp-store/e2e/test:** Test files which include the actual tests.

# Execute tests
Execute the Cypress GUI

```npx cypress open```

Execute the Cypress via commandline

```npx cypress run```

Executes all tests in the Chrome browser and generates a Mochawesome report.

```npm test``` 

# Execute tests in a different browser
```npx cypress run --browser firefox```

***N.B. The browser must be installed on the device.***

# Execute a specific test file

Without Report

```npx cypress run --spec cypress-ui-autocamp-store/e2e/test/InClassActivities/activity4.cy.js```

OR

With Report

```npm run test:spec cypress-ui-autocamp-store/e2e/test/InClassActivities/activity4.cy.js```