import { BasePage } from './BasePage'; // Adjust the path as necessary


export class SearchPage extends BasePage {
    private searchInputSelector = 'input[name="search"]';
    private searchButtonSelector = 'button[type="submit"]';
    private firstResultSelector = '.search-results .result-item:first-child';

    // Method to search for an item
    async searchForItem(itemName: string) {
        await this.type(this.searchInputSelector, itemName);
        await this.click(this.searchButtonSelector);
    }

    // Method to get the first search result
    async getFirstSearchResult() {
        return await this.extractText(this.firstResultSelector);
    }
}