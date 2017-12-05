import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  name: 'filterString',
  output: {
    format: 'iife',
    file: 'dist/filter-string.min.js'
  },
  plugins: [
    resolve(),
    babel(),
    uglify()
  ]
}
