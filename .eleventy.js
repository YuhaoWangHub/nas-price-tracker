const fs = require("fs");

module.exports = function(eleventyConfig) {
  // Make products.json available to templates
  eleventyConfig.addGlobalData("products", () => {
    return JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));
  });

  // Copy the actual JSON file into the output so it's deployed
  eleventyConfig.addPassthroughCopy({ "data/products.json": "data/products.json" });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
