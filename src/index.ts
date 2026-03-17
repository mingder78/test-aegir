/**
 * Simple TypeScript entry point for Aegir
 */

export const greet = (name: string): string => {
  return `Hello, ${name}! Build is OK.`
}

export const version = (): string => {
  if (typeof Bun === 'undefined') {
    return 'Bun version: N/A'
  }
  return `Bun version: ${Bun.version}`
}
