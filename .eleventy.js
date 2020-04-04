const moment = require("moment");
const fs = require("fs");
const pluginRSS = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRSS);
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy("photos");
  eleventyConfig.addPassthroughCopy("assets/js");

  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getFilteredByGlob(["posts/*.md"]);
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return moment.utc(dateObj).format("MMMM Do, YYYY");
  });

  eleventyConfig.addFilter('machineReadableDate', (dateObj) => {
    return moment.utc(dateObj).format("YYYY-MM-DD");
  });

  eleventyConfig.addFilter('gridItemSrcset', (image) => {
    const UPLOAD_URL = "/photos/"

    const i = image.lastIndexOf('.');
    const IMAGE_NAME = image.substring(0, i);
    const IMAGE_EXT = image.substring(i + 1);

    return `${UPLOAD_URL}${IMAGE_NAME}-cover-500px.${IMAGE_EXT} 500w, ${UPLOAD_URL}${IMAGE_NAME}-cover-800px.${IMAGE_EXT} 800w, ${UPLOAD_URL}${IMAGE_NAME}-cover-1200px.${IMAGE_EXT} 1200w`
  });

  eleventyConfig.addFilter('gridItemSrc', (image) => {
    const UPLOAD_URL = "/photos/"

    const i = image.lastIndexOf('.');
    const IMAGE_NAME = image.substring(0, i);
    const IMAGE_EXT = image.substring(i + 1);

    return `${UPLOAD_URL}${IMAGE_NAME}-cover.${IMAGE_EXT}`
  });

  eleventyConfig.addFilter('photoSrcset', (image) => {
    const UPLOAD_URL = "/photos/"

    const i = image.lastIndexOf('.');
    const IMAGE_NAME = image.substring(0, i);
    const IMAGE_EXT = image.substring(i + 1);

    return `${UPLOAD_URL}${IMAGE_NAME}-500px.${IMAGE_EXT} 500w, ${UPLOAD_URL}${IMAGE_NAME}-800px.${IMAGE_EXT} 800w, ${UPLOAD_URL}${IMAGE_NAME}-1200px.${IMAGE_EXT} 1200w, ${UPLOAD_URL}${IMAGE_NAME}-default.${IMAGE_EXT} 1500w, ${UPLOAD_URL}${IMAGE_NAME}-2000px.${IMAGE_EXT} 2000w, ${UPLOAD_URL}${IMAGE_NAME}-2500px.${IMAGE_EXT} 2500w`
  });

  eleventyConfig.addFilter('photoSrc', (image) => {
    const UPLOAD_URL = "/photos/"

    const i = image.lastIndexOf('.');
    const IMAGE_NAME = image.substring(0, i);
    const IMAGE_EXT = image.substring(i + 1);

    return `${UPLOAD_URL}${IMAGE_NAME}-default.${IMAGE_EXT}`
  });

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('_site/404/index.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // You can also pass this in on the command line using `--pathprefix`

    // pathPrefix: "/",

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // These are all optional, defaults are shown:
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
