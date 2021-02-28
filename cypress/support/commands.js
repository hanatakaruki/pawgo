// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add('CustomerLogin', () => {
  cy.visit(Cypress.config('customerWeb'))
  cy.contains('Login').click()
  cy.get('[class="base-input text-input"]').type(Cypress.config('customerEmail'))
  cy.get('[type="password"]').type(Cypress.config('customerPassword'))
  cy.get('[class="button button--block button--fill button--lg button--primary"]').click()
  cy.wait(6000)
  })

Cypress.Commands.add('GroomerLogin', () => {
    cy.contains('Login').click()
    cy.get('[class="base-input text-input"]').type(Cypress.config('groomerEmail')).should('have.value', Cypress.config('groomerEmail'))
    cy.get('[type="password"]').type(Cypress.config('groomerPassword')).should('have.value', Cypress.config('groomerPassword'))
    cy.get('[class="button button--block button--fill button--lg button--primary"]').click()
    cy.wait(5000)
  })

Cypress.Commands.add('AdminLogin', () => {
    cy.visit(Cypress.config('adminWeb'))
    cy.get('input[id="user_login"]').type(Cypress.config('adminUsername'))
    cy.get('input[id="user_pass"]').type(Cypress.config('adminPassword'))
    cy.get('input[type="submit"]').contains('Login').click() 
  })

  Cypress.Commands.add('forceVisit', url => {
    cy.get('body').then(body$ => {
      const appWindow = body$[0].ownerDocument.defaultView;
      const appIframe = appWindow.parent.document.querySelector('iframe');
  
      // We return a promise here because we don't want to
      // continue from this command until the new page is
      // loaded.
      return new Promise(resolve => {
        appIframe.onload = () => resolve();
        appWindow.location = url;
      });
    });
  });
  
  const COMMAND_DELAY = 500;
  
  
  for (const command of ['visit', 'click', 'trigger', 'type', 'clear', 'reload', 'contains']) {
      Cypress.Commands.overwrite(command, (originalFn, ...args) => {
          const origVal = originalFn(...args);
  
          return new Promise((resolve) => {
              setTimeout(() => {
                  resolve(origVal);
              }, COMMAND_DELAY);
          });
      });
  }
  
  Cypress.Commands.add('upload_file', (fileName, fileType = ' ', selector) => {
    cy.get(selector).then(subject => {
      cy.fixture(fileName, 'base64')
        .then(Cypress.Blob.base64StringToBlob)
        .then(blob => {
          const el = subject[0]
          const testFile = new File([blob], fileName, { type: fileType })
          const dataTransfer = new DataTransfer()
          dataTransfer.items.add(testFile)
          el.files = dataTransfer.files
        })
    })
  })
  
  // UTILS
  function hexStringToByte(str) {
    if (!str) {
        return new Uint8Array();
    }
  
    var a = [];
    for (var i = 0, len = str.length; i < len; i += 2) {
        a.push(parseInt(str.substr(i, 2), 16));
    }
  
    return new Uint8Array(a);
  }

  import './commands'
  Cypress.on('uncaught:exception', (err, runnable) => {
  return false
  })