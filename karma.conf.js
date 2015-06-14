module.exports = function(config) {
	config.set({


		basePath: '.',
		logLevel: config.LOG_INFO,
		frameworks: ['systemjs', 'mocha', 'chai', 'chai-as-promised', 'sinon-chai'],
		plugins: [
			'karma-mocha',
			'karma-chai',
			'karma-chai-plugins',
			'karma-systemjs',
			'karma-chrome-launcher',
			'karma-phantomjs-launcher',
			'karma-spec-reporter',
			'karma-mocha-reporter',
			'karma-babel-preprocessor'
		],

		systemjs: {
			configFile: 'system.config.js',
			testFileSuffix: 'Spec.js',
			files: [
				'marionette.shim.js',
				//'test/setup/**.js',
				'vendor/**/**',
				'test/spec/**/*Spec.js',
				'src/**/*.*'
			],
			config: {
				paths: {
					'es6-module-loader': '/vendor/es6-module-loader.js',
					'systemjs': '/vendor/system.js'
				}
			}
		},


		preprocessors: {
			'test/**/*.js': ['babel'],
			'src/**/*.js': ['babel']
		},


		'babelPreprocessor': {
			options: {
				sourceMap: 'inline',
				modules: 'system'
			}
		},


		coverageReporter: {
			type : 'html',
			dir : 'coverage/'
		},


		browsers: ['PhantomJS'],
		reporters: ['spec'],


		singleRun: false,
		colors: true,
		files: [],
		exclude: []

	});
};
