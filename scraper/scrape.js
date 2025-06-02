const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();
  await page.goto("https://www.amazon.ca/s?k=NAS", {
    waitUntil: "domcontentloaded"
  });

  const results = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll(".s-result-item"));
    return items.slice(0, 10).map(el => {
      const title = el.querySelector("h2")?.innerText;
      const asin = el.getAttribute("data-asin");
      const link = asin ? `https://www.amazon.ca/dp/${asin}` : null;
      const price = el.querySelector(".a-price .a-offscreen")?.innerText;
      return title && price && link ? { title, price, link } : null;
    }).filter(Boolean);
  });

  fs.writeFileSync("data/products.json", JSON.stringify(results, null, 2));
  await browser.close();
})();
