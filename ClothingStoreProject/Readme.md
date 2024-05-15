# ClothingStoreProject

This project is the web test automation scripts for the clothing store page

Pattern design: POM
Programing language: JS
Framework: Cypress

## Dependencies

* NPM(node): https://nodejs.org/en/download
* Cypress
* Cypress-xpath
* allure-reports


## Installation

To get started with the project,

Install node, click the link above and complete the installation and
restart the machine


Install the cypress and allure report:

```console
npm install cypress --save-dev
```

```console
npm install cypress-xpath
```

```console
npm install --save-dev allure-commandline
```

```console
npm install --save-dev allure-cypress
```

If you have the issue of no version of cypress, please type in the terminal:
```console
npx cypress install --force
```

## Test and Deploy

To run all the tcs:

```console
npx cypress run
```

To execute the report:
```console
npx allure serve allure-results
```

# Format to use

How to name:

files and classes: CamelCase. For example: myLogin

Methods: CamelCase. For example: myLogin

variables: Camel Snake Case. For example: snake_case