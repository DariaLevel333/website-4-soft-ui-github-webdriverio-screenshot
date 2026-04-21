import { browser, $, expect } from '@wdio/globals'
import { levelAnalyze } from '@level-ci/a11y-webdriverio';


describe('Home page', () => {
  it('should have the right text in the navbar brand', async () => {
    await browser.maximizeWindow()
    await browser.url('/')

    const brandText = await $('.navbar-brand span')

    await brandText.waitForDisplayed({ timeout: 5000 })

    await expect(brandText).toHaveText('Soft UI Dashboard')
    await levelAnalyze(browser, {})
  })
})
