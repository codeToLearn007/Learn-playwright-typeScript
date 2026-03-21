import { Page } from "@playwright/test";

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) : Promise<void> {
        await this.page.goto(url);
    }

    async getTitle(): Promise<void> {
        await this.page.title();
    }

    async close(): Promise<void> {
        await this.page.close();
    }
}