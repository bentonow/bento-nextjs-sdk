import { Options, defineConfig } from 'tsup'

export default defineConfig(() => {
  const common: Options = {
    entry: ['./src/**/*.{ts,tsx,js,jsx}', '!./src/**/*.test.{ts,tsx}'],
    // Preserve original file structure so that the "use client" directives are not lost
    bundle: false,
    clean: true,
    minify: false,
    sourcemap: true,
    format: ['esm', 'cjs'],
    legacyOutput: true,
  }

  const esm: Options = {
    ...common,
    format: 'esm',
  }

  const cjs: Options = {
    ...common,
    format: 'cjs',
    outDir: './dist/cjs',
  }

  return [esm, cjs]
})
