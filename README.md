# NAS Price Tracker

This project scrapes NAS prices from Amazon Canada and publishes the results to a static website.

## Prerequisites

- **Node.js 18+** and **npm** must be installed.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the scraper to fetch the latest product data:
   ```bash
   node scraper/scrape.js
   ```
3. Build the static site with Eleventy:
   ```bash
   npx @11ty/eleventy
   ```

The generated site will be in the `_site` directory.

## GitHub Actions

A workflow defined in `.github/workflows/deploy.yml` automatically runs on pushes to `main`, on a cron schedule, and when manually dispatched. It performs the following steps:

1. Install dependencies and Puppeteer.
2. Scrape Amazon for NAS prices.
3. Build the site with Eleventy.
4. Deploy the contents of `_site` to the `gh-pages` branch using GitHub Pages.

The cron schedule is set to `0 */6 * * *` (every six hours).

## Disclaimer

Scraping Amazon's website may violate their terms of service and is subject to change at any time. Use this project responsibly and at your own risk.
