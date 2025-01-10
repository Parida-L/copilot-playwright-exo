# copilot-playwright-exo

Exercice playwright avec copilot

on remet le code aller dur decath et rehcherche bonnet 
ensuite romuald a donné des instructions pour differents tests 

on tape test et autocompletion cree un code qu'on doit tester 
constat : 
 - il faut que le prompt soit bien rédigé 
 - les locators sont souvent erronés 
 - j'ai du reprendre les locators du projet qui fonctionnait 
 - Au final bcp de temps perdu pour les vérif 
 - LES tests doivent etre OK 
 - Ensuite il faut demander à copilot de refactoriser le code
 - constat refacto : tres efficace 
 - Ensuite demander à copilot de faire le projet en POM 
  - le nouveau prompt en anglais 
  - I already have a functional script for automating the following scenario:

Search for a beanie ('bonnet') on Decathlon's website. Add the first item from the search results to the cart. Simulate a purchase . USE THE CODE ALREADY WORKING IN THE DECATH.SPEC.TS I want you to refactor this code to implement the Page Object Model (POM) design pattern. Please structure the code as follows:

A base page class with reusable methods for interacting with web elements (e.g., clicking, typing, extracting text). Separate page classes for: The search page (searching for items). The product page (interacting with a specific product). The cart/checkout page (adding items to the cart and proceeding to checkout). A test class or script to execute the scenario using these page objects. Make sure the code is modular, clean, and follows best practices for maintainability. Include comments explaining each refactored component.

If possible, use TYPECRIPT AND PLAYWWRIGHT, but reuse existing libraries and code logic where applicable. Avoid modifying the functional aspects of the script; focus only on restructuring it into the POM pattern."
- ca a généré un nouveau projet 
- - mais il aoublé les impots 

  CONSIGNE 
  - tester le site https://demoqa.com/browser-windows avec du POM en utilisant copilot sur un nouveau projet 