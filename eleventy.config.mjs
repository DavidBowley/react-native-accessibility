import { HtmlBasePlugin } from "@11ty/eleventy";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default async function (eleventyConfig) {
  const BUILD_ENV = process.env.BUILD_ENV;

  eleventyConfig.on("eleventy.before", async () => {
    if (BUILD_ENV !== "development" && BUILD_ENV !== "production") {
      console.error(
        "Aborting build as no valid environment variable has been set",
      );
      process.exit(1);
    }
  });

  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("build");
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  if (BUILD_ENV === "development") {
    eleventyConfig.addPassthroughCopy("src/assets");
  } else if (BUILD_ENV === "production") {
    eleventyConfig.addPassthroughCopy("src/assets/**/*/!(*.ts)");
  }
}
