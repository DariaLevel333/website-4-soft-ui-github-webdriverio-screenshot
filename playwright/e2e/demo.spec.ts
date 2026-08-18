import { chromium } from 'playwright';

const BASE_URL = 'http://127.0.0.1:1342';

async function runTests() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    console.log('Starting test: runs Level CI analysis on the home page');
    await page.goto(BASE_URL + '/');

    // Check for "Best Broadband" text
    const headlineElements = page.locator('.headline');
    const elementCount = await headlineElements.count();
    
    if (elementCount === 0) {
      throw new Error('No .headline elements found on the page');
    }

    let bestBroadbandFound = false;
    let internetPlansFound = false;

    for (let i = 0; i < elementCount; i++) {
      const text = await headlineElements.nth(i).textContent();
      if (text && /Best Broadband/.test(text)) {
        bestBroadbandFound = true;
      }
      if (text && /Internet Plans For You/.test(text)) {
        internetPlansFound = true;
      }
    }

    if (!bestBroadbandFound) {
      throw new Error('Expected text "Best Broadband" not found in .headline elements');
    }
    if (!internetPlansFound) {
      throw new Error('Expected text "Internet Plans For You" not found in .headline elements');
    }

    console.log('✓ Test passed: Found expected text in headline elements');
  } catch (error) {
    console.error('✗ Test failed:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

runTests();
