import { defineConfig } from 'tsup'

export default defineConfig(() => {
  return {
    entry: ['./src/**/*.{ts,tsx,js,jsx}', '!./src/**/*.test.{ts,tsx}'],
    // Preserve original file structure so that the "use client" directives are not lost
    bundle: false,
    clean: true,
    minify: false,
    sourcemap: true,
    dts: true,
    format: ['esm', 'cjs'],
  }
})
