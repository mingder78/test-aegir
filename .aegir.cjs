module.exports = {
  tsRepo: true,
  test: {
    build: false  // don't build test files
  },
  release: {
    access: "public",
    publish: true,
    ghRelease: false,
  }
}
