# copilot-playwright-exo

## Project Overview
This project is an exercise using Playwright for automating tests on Decathlon's website. The focus is on implementing the Page Object Model (POM) design pattern to enhance code maintainability and readability.

## Project Structure
```
copilot-playwright-exo
├── src
│   ├── pages
│   │   ├── basePage.ts        # Contains reusable methods for interacting with web elements
│   │   ├── searchPage.ts      # Methods specific to searching for items
│   │   ├── productPage.ts     # Methods for interacting with a specific product
│   │   └── cartPage.ts        # Methods for managing the cart and checkout process
│   ├── tests
│   │   └── decath.spec.ts     # Test script that executes the automation scenario
│   └── types
│       └── index.ts           # Custom types and interfaces for type safety
├── package.json                # npm configuration file
├── playwright.config.ts        # Playwright configuration file
├── tsconfig.json              # TypeScript configuration file
└── README.md                   # Project documentation
```

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd copilot-playwright-exo
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the tests**:
   ```
   npx playwright test
   ```

## Usage
The project automates the following scenario:
- Searches for a beanie ('bonnet') on Decathlon's website.
- Adds the first item from the search results to the cart.
- Simulates a purchase process.

## Best Practices
- Follow the Page Object Model (POM) design pattern for better code organization.
- Ensure that all tests are modular and reusable.
- Use TypeScript for type safety and clarity.

## Acknowledgments
Thanks to the contributors and the community for their support in developing this project.