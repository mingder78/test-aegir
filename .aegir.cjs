module.exports = {
  tsRepo: true,
  test: {
    build: false  // don't build test files
  },
  release: {
    npmPublish: true,
    npmPublishOptions: {
      provenance: false
    }
  }
}
