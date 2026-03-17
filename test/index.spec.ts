import { expect } from 'aegir/chai'
import { greet, version } from '../src/index.js'

describe('Aegir Build Tests', () => {
  it('should greet the user correctly', () => {
    const result = greet('World')
    expect(result).to.equal('Hello, World! Build is OK.')
  })

  it('should return a valid Bun version string', () => {
    const result = version()
    if (typeof Bun !== 'undefined') {
      expect(result).to.match(/^Bun version: \d+\.\d+/)
    } else {
      expect(result).to.equal('Bun version: N/A')
    }
  })
})
