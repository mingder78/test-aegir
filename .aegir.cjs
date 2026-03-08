module.exports = {
  tsRepo: true,
  release: {
    build: false
  },
  test: {
    runner: 'bun', // change this to use bun
    build: false  // don't build test files
  }
}
