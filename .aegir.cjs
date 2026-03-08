module.exports = {
  tsRepo: true,
  test: {
    build: false  // don't build test files
  },
  release: {
    publish: true,
    ghRelease: false,
    npmPublish: true,
    npmPublishOptions: {
      provenance: false
    }
  }
}
