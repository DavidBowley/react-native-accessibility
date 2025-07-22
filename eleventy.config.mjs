export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("build");
  eleventyConfig.addPassthroughCopy("src/assets");
}
