import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: {
    exports: 'named',
    name: 'filterString',
    format: 'iife',
    file: 'dist/filter-string.min.js'
  },
  plugins: [
    resolve(),
    babel(),
    terser()
  ]
}
