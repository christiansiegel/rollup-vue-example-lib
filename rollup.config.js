// rollup.config.js
import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/main.js',
  output: [
    { format: 'es', file: 'dist/bundle.js', sourcemap: true }
  ],
  plugins: [
    vue(),
    css(),
    buble(),
    nodeResolve({ browser: true, jsnext: true, main: true }),
    commonjs(),
    uglify()
  ]
}
