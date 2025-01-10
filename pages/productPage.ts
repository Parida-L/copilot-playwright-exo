
import { BasePage } from './BasePage'; // Adjust the path as necessary


export class ProductPage extends BasePage {
    private productTitleSelector = 'h1.product-title'; // Selector for the product title
    private addToCartButtonSelector = 'button.add-to-cart'; // Selector for the add to cart button

    // Method to get the product title
    async getProductTitle(): Promise<string> {
        return await this.extractText(this.productTitleSelector);
    }

    // Method to add the product to the cart
    async addToCart(): Promise<void> {
        await this.click(this.addToCartButtonSelector);
    }
}