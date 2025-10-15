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


**Tips:**  
#### To run tests with headed mode use --headed flag (See browsers windows)
```npx playwright test --headed```

#### Run a single project/browser 
```npx playwright test --project=chromium```
```npx playwright test --project=firefox```
```npx playwright test --project=webkit```

#### Run with more workers
```npx playwright test --workers 9```


#### Run one test file ####  
```npx playwright test tests/example.spec.js```

#### Open testing UI ####    
```npx playwright test --ui```

#### Notes for future maintanability improvements
BDD layer for wrapping - https://vitalets.github.io/playwright-bdd/#/
Better expect printer - https://github.com/playwright-community/expect-playwright