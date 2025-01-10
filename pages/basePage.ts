export class BasePage {
    protected page: any;

    constructor(page: any) {
        this.page = page;
    }

    // Method to click on an element
    async click(selector: string): Promise<void> {
        await this.page.click(selector);
    }

    // Method to type text into an input field
    async type(selector: string, text: string): Promise<void> {
        await this.page.fill(selector, text);
    }

    // Method to extract text from an element
    async extractText(selector: string): Promise<string> {
        return await this.page.textContent(selector);
    }

    // Method to wait for an element to be visible
    async waitForVisible(selector: string): Promise<void> {
        await this.page.waitForSelector(selector, { state: 'visible' });
    }
}