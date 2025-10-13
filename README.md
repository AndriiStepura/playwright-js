# playwright-js POC
Current repo with code of Playwright project to run test using JS


<br />

# Environment reqirements
Node.js with npm should be installed, can be download at - https://nodejs.org/en/download

*For debug in VSC*  - https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright


<br />


# Playwright notes 

### To run browser for record code based on your UI actions (codegen)
```npx playwright codegen```

### To run tests
```npx playwright test```

### To run tests with headed mode use --headed flag
```npx playwright test --headed```

*Tips:*
```
See the browser window: add --headed.

Run a single project/browser: --project=chromium.

Run one file: npx playwright test tests/example.spec.ts.

Open testing UI: --ui.
```

