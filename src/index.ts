/**
 * Simple TypeScript entry point for Aegir
 */

export const greet = (name: string): string => {
  return `Hello, ${name}! Build is OK.`;
};

// If using Bun-specific globals, ensure @types/bun is installed
export const version = (): string => {
  return `Bun version: ${Bun.version}`;
};

console.log(greet("Developer"));

