/// <reference types="Cypress" />
import cypress from "cypress"
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

    Given ('You access Home Page ', () =>{
        cy.visit("http://www.way2automation.com/angularjs-protractor/banking/#/login")
    })
    And ('You click on Bank Manager Login', () =>{
        cy.get('.borderM').click();
        cy.get('.center:nth-child(3) > .btn').click();
    })
    When('You add a customer', () =>{
        cy.get('.border').click();
        cy.get('.btn-lg:nth-child(1)').click();
    })
    Then('You enter customer details and add customer', () =>{
        cy.get('.form-group:nth-child(3) > label').click();
        cy.get('.focus-visible').click();
        cy.get('.focus-visible').type('Dennis');
        cy.get('.form-group:nth-child(2) > .form-control').type('Githua');
        cy.get('.ng-untouched').type('00200');
        cy.get('.btn-default').click();
        cy.get('.ng-dirty:nth-child(1)').submit();
    })
    When('You select customer tab', ()=>{
        cy.get('.btn-lg:nth-child(3)').click();
        cy.get('.container-fluid > .ng-scope').click();
    })
    Then ('Then You search for customer name',() => {
        cy.get('.form-control').click();
        cy.get('.form-control').type('Dennis');
    })
    And('You confirm customer has bee added', () =>{
        cy.get('.ng-valid:nth-child(1)').submit();
    })