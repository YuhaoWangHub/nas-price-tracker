module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("products", () => require("./data/products.json"));
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
