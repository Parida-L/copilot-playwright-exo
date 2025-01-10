import { test, expect, Page } from '@playwright/test';
import { SearchPage } from '../pages/searchPage';
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartPage';

test.describe('Decathlon Purchase Flow', () => {
    let searchPage: SearchPage;
    let productPage: ProductPage;
    let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
        searchPage = new SearchPage(page);
        productPage = new ProductPage(page);
        cartPage = new CartPage(page);
    });

    test('Search for a beanie and add to cart', async () => {
        // Navigate to Decathlon's website
        await page.goto('https://www.decathlon.com');

        // Search for a beanie
        await searchPage.searchForItem('bonnet');

        // Get the first search result and add it to the cart
        const firstProductTitle = await searchPage.getFirstSearchResult();
        await productPage.addToCart(firstProductTitle);

        // Proceed to checkout
        await cartPage.viewCart();
        await cartPage.proceedToCheckout();

        // Validate that the cart contains the correct item
        const cartItemTitle = await cartPage.getCartItemTitle();
        expect(cartItemTitle).toBe(firstProductTitle);
    });
});