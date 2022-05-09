const fs = require('fs')
const {buildPrimitives, StyleDictionary} = require('@primer/primitives/build')

const mediaQueryFormat = require('../src/formats/responsive-media-query')

;(function () {
  const namespace = 'brand'
  const outputPath = './lib/design-tokens'
  const src = './src/tokens'
  const dest = 'tokens'

  /**
   * Step 1:
   * Create a temporary directory with JSON files to convert into tokens
   */
  // move over base configs

  fs.cpSync('./node_modules/@primer/primitives/tokens', dest, {recursive: true})

  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, {force: true, recursive: true})
  }

  /**
   * Step 2:
   * Build tokens by running function against the temporary directory
   */

  StyleDictionary.registerFormat(mediaQueryFormat)

  //build most tokens
  buildPrimitives({
    source: [`tokens/**/*.json`, `!tokens/**/size-*.json`],
    namespace,
    outputPath
  })

  buildPrimitives({
    source: [`tokens/functional/size/size-fine.json`, `tokens/base/size/size.json`], //build size fine
    namespace,
    outputPath
  })

  buildPrimitives({
    source: [`tokens/functional/size/size-coarse.json`, `tokens/base/size/size.json`], //build size coarse
    namespace,
    outputPath
  })

  buildPrimitives({
    source: [`tokens/base/size/size.json`, `tokens/functional/size/size-fine.json`], // build the special formats
    namespace,
    outputPath,
    platforms: {
      css: {
        buildPath: `${outputPath}/css/`,
        transformGroup: 'css',
        files: [
          {
            destination: `tokens/functional/size/size-fine.css`,
            format: `css/touch-target-desktop`,
            filter: token => token.filePath.includes('fine'),
            options: {
              outputReferences: true
            }
          }
        ]
      }
    }
  })

  buildPrimitives({
    source: [`tokens/base/size/size.json`, `tokens/functional/size/size-coarse.json`], // build the special formats
    namespace,
    platforms: {
      css: {
        buildPath: `${outputPath}/css/`,
        transformGroup: 'css',
        files: [
          {
            destination: `tokens/functional/size/size-coarse.css`,
            format: `css/touch-target-mobile`,
            filter: token => token.filePath.includes('coarse'),
            options: {
              outputReferences: true
            }
          }
        ]
      }
    }
  })

  buildPrimitives({
    source: [`tokens/base/typography/typography.json`, `tokens/functional/typography/typography-responsive.json`], // build the special formats
    namespace,
    platforms: {
      css: {
        buildPath: `${outputPath}/css/`,
        transformGroup: 'css',
        files: [
          {
            destination: `tokens/functional/typography/typography-responsive.css`,
            format: `css/responsive-media-query`,
            options: {
              outputReferences: true
            }
          }
        ]
      }
    }
  })

  /**
   * Step 3:
   * Clean up the temporary directory
   */
  fs.rmdirSync(dest, {recursive: true})
})()