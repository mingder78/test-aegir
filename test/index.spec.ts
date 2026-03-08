import { expect } from 'aegir/chai'
import { greet, version } from '../src/index.js'

describe('Aegir Build Tests', () => {
  it('should greet the user correctly', () => {
    const result = greet('World')
    expect(result).to.equal('Hello, World! Build is OK.')
  })

  it('should return a valid Bun version string', () => {
    const result = version()
    expect(result).to.contain('Bun version:')
    // Ensures the version isn't undefined or empty
    expect(result.length).to.be.greaterThan(12)
  })
})

