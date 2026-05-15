import { browser, $, expect } from '@wdio/globals'
import { levelAnalyze } from '@level-ci/a11y-webdriverio'

describe('Home page', () => {
  it('should have the right text in the target element', async () => {
    //await browser.maximizeWindow()
    await browser.url('/')

    const targetEl = await $('xpath:/html/body/main/div[1]/div[2]/div[1]/div/div/div/div[1]/div/h5')

    await targetEl.waitForDisplayed({ timeout: 5000 })

    await expect(targetEl).toHaveText('Soft UI Dashboard')

    await levelAnalyze(browser, {
      experimental: { elementScreenshots: true, stableSelectorAttributes: ['data-testid'] }
    })
  })
})