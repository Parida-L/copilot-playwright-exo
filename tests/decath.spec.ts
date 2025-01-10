import { test, expect } from '@playwright/test';

const navigateAndAcceptCookies = async (page) => {
    await page.goto('https://www.decathlon.fr');
    await page.getByLabel('Accepter & Fermer: Accepter').click();
};

const searchForProduct = async (page, product) => {
    await navigateAndAcceptCookies(page);
    await page.getByPlaceholder('Rechercher un produit, un').fill(product);
    await page.getByPlaceholder('Rechercher un produit, un').press('Enter');
};

test('Search for a beanie and order the first model found on Decathlon', async ({ page }) => {
    await searchForProduct(page, 'bonnet');
});

// All tests are for decathlon.fr

// Test case 1 : Verify navigation to decathlon.fr
test('Verify navigation to decathlon.fr', async ({ page }) => {
    await page.goto('https://www.decathlon.fr');
    expect(page.url()).toBe('https://www.decathlon.fr/');
});

// Test case 2 : Verify cookie acceptance
test('Verify cookie acceptance', async ({ page }) => {
    await navigateAndAcceptCookies(page);
    expect(await page.isVisible('text=Accepter')).toBe(false);
});

// Test case 3 : Verify product search
test('Verify product search', async ({ page }) => {
    await searchForProduct(page, 'bonnet');
    expect(await page.isVisible('text=bonnet')).toBe(true);
});

// Test case 4 : Verify selection of the first product
test('Verify selection of the first product', async ({ page }) => {
    await searchForProduct(page, 'bonnet');
    await page.getByRole('main').getByRole('list').first().click();
    expect(await page.isVisible('text=Bonnet')).toBe(true);
});

// Test case 5 : Verify adding product to cart
test('Verify adding product to cart', async ({ page }) => {
    await searchForProduct(page, 'bonnet');
    await page.getByRole('main').getByRole('list').first().click();
    await page.getByRole('main').getByRole('list').locator('div').filter({ hasText: 'BONNET DE SKI ADULTE - FISHERMAN - NOIR 16 modèles disponibles 5€ 8€ -3€ *À' }).getByLabel('Ajouter au panier').click();
    expect(await page.isVisible('text=panier')).toBe(true);
    await page.locator('#vtmn-modal-description').getByRole('button', { name: 'Ajouter au panier' }).click();
});

// Test case 6 : Verify accessing the cart
test('Verify accessing the cart', async ({ page }) => {
    await searchForProduct(page, 'bonnet');
    await page.getByRole('main').getByRole('list').first().click();
    await page.getByRole('main').getByRole('list').locator('div').filter({ hasText: 'BONNET DE SKI ADULTE - FISHERMAN - NOIR 16 modèles disponibles 5€ 8€ -3€ *À' }).getByLabel('Ajouter au panier').click();
    expect(await page.isVisible('text=panier')).toBe(true);
    await page.locator('#vtmn-modal-description').getByRole('button', { name: 'Ajouter au panier' }).click();
    await page.getByRole('link', { name: 'Mon panier' }).click();
    expect(await page.isVisible('text=panier')).toBe(true);
});

// Test case 7 : Verify the checkout process
test('Verify the checkout process', async ({ page }) => {
    await searchForProduct(page, 'bonnet');
    await page.getByRole('main').getByRole('list').first().click();
    await page.getByRole('main').getByRole('list').locator('div').filter({ hasText: 'BONNET DE SKI ADULTE - FISHERMAN - NOIR 16 modèles disponibles 5€ 8€ -3€ *À' }).getByLabel('Ajouter au panier').click();
    expect(await page.isVisible('text=panier')).toBe(true);
    await page.locator('#vtmn-modal-description').getByRole('button', { name: 'Ajouter au panier' }).click();
    await page.getByRole('link', { name: 'Mon panier' }).click();
    expect(await page.isVisible('text=panier')).toBe(true);
    await page.getByRole('button', { name: 'Poursuivre la commande' }).click();
    expect(await page.isVisible('text=commande')).toBe(true);
    await expect(page).toHaveURL(/login/i);
    console.log('🎉 Test terminé avec succès : les étapes de commande sont fonctionnelles.');
});

// Expected Result: Verify that the checkout process is initiated (e.g., check for the presence of the checkout page)