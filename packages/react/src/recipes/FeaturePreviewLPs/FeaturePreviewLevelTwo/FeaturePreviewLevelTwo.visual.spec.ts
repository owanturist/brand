/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: FeaturePreviewLevelTwo', () => {
  test('FeaturePreviewLevelTwo / Playground', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=recipes-feature-previews-level-2--level-two-playground&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('FeaturePreviewLevelTwo / Minimal', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=recipes-feature-previews-level-2--level-two-minimal&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('FeaturePreviewLevelTwo / 2.1 variant', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=recipes-feature-previews-level-2--level-two-point-one&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('FeaturePreviewLevelTwo / 2.2 variant', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=recipes-feature-previews-level-2--level-two-point-two&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('FeaturePreviewLevelTwo / 2.3 variant', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=recipes-feature-previews-level-2--level-two-point-three&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})