import { terser } from 'rollup-plugin-terser'
import cleaner from 'rollup-plugin-cleaner'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/esm.min.js',
      format: 'esm',
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: 'dist/cjs.cjs',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/cjs.min.cjs',
      format: 'cjs',
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: 'dist/umd.js',
      format: 'umd',
      name: 'solo-rpg-lib',
      sourcemap: true,
    },
    {
      file: 'dist/umd.min.js',
      format: 'umd',
      name: 'solo-rpg-lib',
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  plugins: [
    cleaner({
      targets: ['./dist/'],
    }),
  ],
}
