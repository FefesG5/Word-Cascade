import { test, expect } from "@playwright/test";
import navigationLinks from "@/config/navigation.json";

test.describe("Home Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  // Separate tests for each navigation link
  test.describe("Navigation Links", () => {
    test("About link navigates to the correct page", async ({ page }) => {
      const aboutLink = page.locator('[data-testid="nav-about"]');
      await expect(aboutLink).toHaveAttribute("href", "/about");
    });

    test("Contact link navigates to the correct page", async ({ page }) => {
      const contactLink = page.locator('[data-testid="nav-contact"]');
      await expect(contactLink).toHaveAttribute("href", "/contact");
    });
  });

  test("Home Page has the correct document title", async ({ page }) => {
    await expect(page).toHaveTitle(/Create Next App/i);
  });

  test("Home Page displays the correct h1 heading", async ({ page }) => {
    const heading = page.locator("h1", { hasText: "Home Page" });
    await expect(heading).toBeVisible();
  });

  test("should toggle the theme between light and dark", async ({ page }) => {
    await page.click('button:has-text("Switch to Dark Theme")');
    await page.click('button:has-text("Switch to Light Theme")');
  });

  test("sidebar functionality", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const hamburger = page.locator("button", { hasText: "☰" });
    await expect(hamburger).toBeVisible();
    await hamburger.click();

    const sidebar = page.locator("aside");
    await expect(sidebar).toBeVisible();

    const outsideArea = page.locator("header");
    await outsideArea.click();
    await expect(sidebar).not.toBeVisible();
  });

  test.describe("Sidebar navigation items", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("http://localhost:3000");
      await page.setViewportSize({ width: 375, height: 667 });
      const hamburger = page.locator("button", { hasText: "☰" });
      await hamburger.click();
    });

    for (const link of navigationLinks) {
      test(`"${link.label}" link navigates to ${link.href} and closes sidebar`, async ({
        page,
      }) => {
        await page.click(`text=${link.label}`);
        await expect(page).toHaveURL(`http://localhost:3000${link.href}`);

        await expect(page.locator(".sidebar")).not.toBeVisible();
      });
    }
  });

  test("footer should be visible", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("footer should contain link to Vercel", async ({ page }) => {
    const vercelLink = page.locator("footer a[href='https://vercel.com']");
    await expect(vercelLink).toBeVisible();
    await expect(vercelLink).toHaveAttribute("target", "_blank");
  });

  test("footer should display the Vercel logo", async ({ page }) => {
    const vercelLogo = page.locator("footer img[alt='Vercel Logo']");
    await expect(vercelLogo).toBeVisible();
    await expect(vercelLogo).toHaveAttribute("src", "/vercel.svg");
  });
});
