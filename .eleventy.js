module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./static/css")
  eleventyConfig.addPassthroughCopy("./static/fonts")
  eleventyConfig.addPassthroughCopy("./static/img")

  eleventyConfig.addTransform("replace-url", (content) => {
    const url = process.env.URL || "http://localhost:8080"
    const result = content.replace(/https:\/\/borbus-shop.com/g, url)
    return result
  })

  eleventyConfig.addTransform("replace-css-paths", (content) => {
    const result = content.replace(/css\//g, "../css/")
    return result
  })

  eleventyConfig.addTransform("replace-img-paths", (content) => {
    const result = content.replace(/img\//g, "../img/")
    return result
  })

  return {
    dir: {
      input: "./static",
      output: "./public",
    }
  }
}
