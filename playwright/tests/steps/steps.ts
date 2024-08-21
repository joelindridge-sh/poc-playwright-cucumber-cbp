import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("I am logged in as a broker", async ({ page }) => {
  await page.goto("https://green-pond-004309e03-982.westeurope.azurestaticapps.net/corporate-portal/");
  await page.locator("#onetrust-accept-btn-handler").click();
  await page.locator('[name="username"]').fill(process.env["cognito-broker-username"]);
  await page.locator('[name="password"]').fill(process.env["cognito-broker-password"]);
  await page.locator("button").getByText("Sign in").click();
  await page.getByTestId("AgreeTermsOfUse_Button").click();
  await expect(page.locator("h1", { hasText: "Welcome" })).toBeVisible();
});

When("I click the contact us button from the dashboard", async ({ page }) => {
  await page.locator("[class*='DashboardButton'] a", { hasText: new RegExp("contact us", "i") }).click();
});

When("I click the contact us button from the account menu", async ({ page }) => {
  await page.getByRole("button", { name: new RegExp("account menu dropdown", "i") }).dispatchEvent("mouseover");
  await page.locator("[class*='HeaderDropdown'] a", { hasText: new RegExp("contact us", "i") }).click();
  await page.getByRole("img", { name: /simplyhealth logo/i }).click();
});

Then("I should see {string} in the heading", async ({ page }, heading) => {
  await expect(page.getByRole("heading", { name: new RegExp(heading, "i") })).toBeVisible();
});
