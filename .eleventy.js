const fs = require("fs");

module.exports = function (eleventyConfig) {
  // Copy the data file to the _site/data folder
  eleventyConfig.addPassthroughCopy({ "data/products.json": "data/products.json" });

  // Load the JSON for use in templates
  eleventyConfig.addGlobalData("products", () => require("./data/products.json"));

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
