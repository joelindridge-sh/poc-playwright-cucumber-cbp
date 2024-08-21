import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

require("dotenv").config();

/**
 * See https://vitalets.github.io/playwright-bdd/#/configuration/options.
 */
const testDir = defineBddConfig({
  features: ["playwright/tests/features/**/*.feature"],
  steps: ["playwright/tests/steps/**/*.ts"],
  outputDir: "playwright/.features-gen",
});

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir,
  outputDir: "playwright/output",

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["html", { outputFolder: "playwright/reports" }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    // launchOptions: {
    //   slowMo: 1000,
    // },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Microsoft Edge",
      use: {
        // Supported Microsoft Edge channels are: msedge, msedge-beta, msedge-dev, msedge-canary
        channel: "msedge",
      },
    },
  ],
});
