@contact-us
Feature: Contact Us Form
    As a Corporate client or Broker logged into my Admin Portal, I want to send a query or question to Simplyhealth's Corporate Admin team using an online form, so that I can quickly get an answer to my admin-related question via email.

  Background: Logged in as a broker and on the dashboard
    Given I am logged in as a broker

  Scenario: Navigating to contact us from the dashboard
    When I click the contact us button from the dashboard
    Then I should see "contact us" in the heading

  Scenario: Navigating to contact us from the account menu
    When I click the contact us button from the account menu
    Then I should see "contact us" in the heading
