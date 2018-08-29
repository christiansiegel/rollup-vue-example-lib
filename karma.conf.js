const name = require('./package.json').name

function camelize(name) {
  // replace -project by project
  return name.replace(/-([a-z])/g, g => g[1].toUpperCase())
}

// karma.conf.js
module.exports = function (config) {
  config.set({
    files: [
      /**
       * Make sure to disable Karma�s file watcher
       * because the preprocessor will use its own.
       */
      {
        pattern: 'test/**/*.spec.js',
        watched: false
      }
	],

	frameworks: ['mocha', 'chai'],
	
	browsers: ['ChromeHeadless'],

    preprocessors: {
      'test/**/*.spec.js': ['rollup']
    },

    rollupPreprocessor: {
      /**
       * This is just a normal Rollup config object,
       * except that `input` is handled for you.
       */
      plugins: [
        require('rollup-plugin-replace')({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        require('rollup-plugin-vue')(),
        require('rollup-plugin-node-resolve')({
          browser: true,
          jsnext: true,
          main: true
        }),
        require('rollup-plugin-commonjs')({
          namedExports: {
            '@vue/test-utils': [
              'mount'
            ]
          }
        })
      ],
      output: {
        format: 'iife', // Helps prevent naming collisions.
        name: camelize(name), // Required for 'iife' format.
        sourcemap: 'inline' // Sensible for testing.
      }
	}
  })
}
