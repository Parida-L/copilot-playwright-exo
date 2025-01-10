import { test, expect } from '@playwright/test';

test('Search for a beanie and order the first model found on Decathlon', async ({ page }) => {
    await page.goto('https://www.decathlon.fr');
    // close the pop up
    await page.getByLabel('Accepter & Fermer: Accepter').click();
    // Enter the search term
    await page.getByPlaceholder('Rechercher un produit, un').fill('bonnet');;
    // Click on the search button
    await page.getByPlaceholder('Rechercher un produit, un').press('Enter');

});

// All tests are for decathlon.fr
 
// Test case 1 : Verify navigation to decathlon.fr
// Step 1: Open the browser and navigate to the decathlon.fr
test('Verify navigation to decathlon.fr', async ({ page }) => {
    await page.goto('https://www.decathlon.fr');
    expect(page.url()).toBe('https://www.decathlon.fr/');
});
// Expected Result: Verify that the current URL is decathlon.fr

// Test case 2 : Verify cookie acceptance
// Step 1: Open the browser and navigate to the decathlon.fr
// Step 2: Accept cookies
test('Verify cookie acceptance', async ({ page }) => {
    await page.goto('https://www.decathlon.fr');
    await page.locator('button:has-text("Accepter")').click(); //corrigé
    expect(await page.isVisible('text=Accepter')).toBe(false);
});
// Expected Result: Verify that the cookies are accepted (the button disappears after the click)
 
// Test case 3 : Verify product search
// Step 1: Open the browser and navigate to the decathlon.fr and Close the pop-up
// Step 2: Search for "bonnet"
test('Verify product search', async ({ page }) => {
    await page.goto('https://www.decathlon.fr');
    await page.getByLabel('Accepter & Fermer: Accepter').click();
    await page.getByPlaceholder('Rechercher un produit, un').fill('bonnet');
    await page.getByPlaceholder('Rechercher un produit, un').press('Enter');
    expect(await page.isVisible('text=bonnet')).toBe(true);
});
// Expected Result: Verify that the search results are displayed
 
// Test case 4 : Verify selection of the first product
// Step 1: Navigate to decathlon.fr, perform the search
// Step 2: Select the first product
test('Verify selection of the first product', async ({ page }) => {
    await page.goto('https://www.decathlon.fr');
    await page.getByLabel('Accepter & Fermer: Accepter').click();
    await page.getByPlaceholder('Rechercher un produit, un').fill('bonnet');
    await page.getByPlaceholder('Rechercher un produit, un').press('Enter');
    await page.getByRole('main').getByRole('list').first().click();
    expect(await page.isVisible('text=Bonnet')).toBe(true);
});

// Expected Result: Verify that the product page is displayed (e.g., check the product title element)
 
// Test case 5 : Verify adding product to cart
// Step 1: Navigate to decathlon.fr, perform the search and select the product
// Step 2: Add to cart
test('Verify adding product to cart', async ({ page }) => {
    await page.goto('https://www.decathlon.fr');
    await page.getByLabel('Accepter & Fermer: Accepter').click();
    await page.getByPlaceholder('Rechercher un produit, un').fill('bonnet');
    await page.getByPlaceholder('Rechercher un produit, un').press('Enter');
    await page.getByRole('main').getByRole('list').first().click();
    await page.getByRole('main').getByRole('list').locator('div').filter({ hasText: 'BONNET DE SKI ADULTE - FISHERMAN - NOIR 16 modèles disponibles 5€ 8€ -3€ *À' }).getByLabel('Ajouter au panier').click();
    expect(await page.isVisible('text=panier')).toBe(true);
    await page.locator('#vtmn-modal-description').getByRole('button', { name: 'Ajouter au panier' }).click()

});
// Expected Result: Verify that the product is added to the cart (e.g., check for a confirmation message)
 
// Test case 6 : Verify accessing the cart
// Step 1: Navigate to decathlon.fr, perform the search and add the product to the cart
// Step 2: Go to the cart
test('Verify accessing the cart', async ({ page }) => {
    await page.goto('https://www.decathlon.fr');
    await page.getByLabel('Accepter & Fermer: Accepter').click();
    await page.getByPlaceholder('Rechercher un produit, un').fill('bonnet');
    await page.getByPlaceholder('Rechercher un produit, un').press('Enter');
    await page.getByRole('main').getByRole('list').first().click();
    await page.getByRole('main').getByRole('list').locator('div').filter({ hasText: 'BONNET DE SKI ADULTE - FISHERMAN - NOIR 16 modèles disponibles 5€ 8€ -3€ *À' }).getByLabel('Ajouter au panier').click();
    expect(await page.isVisible('text=panier')).toBe(true);
    await page.locator('#vtmn-modal-description').getByRole('button', { name: 'Ajouter au panier' }).click()
    await page.getByRole('link', { name: 'Mon panier' }).click();
    expect(await page.isVisible('text=panier')).toBe(true);
});
// Expected Result: Verify that the product is present in the cart
 
// Test case 7 : Verify the checkout process
// Step 1: Navigate to decathlon.fr, perform the search, add the product to the cart and go to the cart
// Step 2: Proceed to checkout
test('Verify the checkout process', async ({ page }) => {
    await page.goto('https://www.decathlon.fr');
    await page.getByLabel('Accepter & Fermer: Accepter').click();
    await page.getByPlaceholder('Rechercher un produit, un').fill('bonnet');
    await page.getByPlaceholder('Rechercher un produit, un').press('Enter');
    await page.getByRole('main').getByRole('list').first().click();
    await page.getByRole('main').getByRole('list').locator('div').filter({ hasText: 'BONNET DE SKI ADULTE - FISHERMAN - NOIR 16 modèles disponibles 5€ 8€ -3€ *À' }).getByLabel('Ajouter au panier').click();
    expect(await page.isVisible('text=panier')).toBe(true);
    await page.locator('#vtmn-modal-description').getByRole('button', { name: 'Ajouter au panier' }).click()
    await page.getByRole('link', { name: 'Mon panier' }).click();
    expect(await page.isVisible('text=panier')).toBe(true);
    await page.getByRole('button', { name: 'Poursuivre la commande' }).click();
    expect(await page.isVisible('text=commande')).toBe(true);
    await expect(page).toHaveURL(/login/i);
    console.log('🎉 Test terminé avec succès : les étapes de commande sont fonctionnelles.');

});
// Expected Result: Verify that the checkout process is initiated (e.g., check for the presence of the checkout page)