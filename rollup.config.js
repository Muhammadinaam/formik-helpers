import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

const plugins = [
  external(),
  postcss({
    modules: true
  }),
  url(),
  svgr(),
  babel({
    exclude: 'node_modules/**',
    plugins: ['external-helpers']
  }),
  resolve(),
  commonjs({
    namedExports: {
      'node_modules/formik/node_modules/scheduler/index.js': ['unstable_runWithPriority', 'LowPriority'],
      'scheduler': ['unstable_runWithPriority', 'LowPriority'],
      'node_modules/scheduler': ['unstable_runWithPriority', 'LowPriority'],
      './node_modules/scheduler': ['unstable_runWithPriority', 'LowPriority'],
      '../node_modules/formik/node_modules/scheduler/index.js': ['unstable_runWithPriority', 'LowPriority']
    }
  })
];

const createConfig = filename => ({
  input: `src/${filename}`,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins
});

const configs = [
  'index', // dont add '.js' at end
].map(filename => createConfig(filename));

export default configs;