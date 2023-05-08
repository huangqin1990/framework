import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;
const banner = '/*! BotFramework: https://botim.com/ - MIT License */';

export default {
	input: 'core/index.js',
	output: [
		{
			file: 'public/bot.esm.js',
			sourcemap: true,
			format: 'esm',
			generatedCode: { constBindings: true },
			plugins: [terser()],
			banner,
		},
		{
			file: 'public/bot.bundle.js',
			format: 'umd',
			name: 'BOT',
			sourcemap: true,
			generatedCode: { constBindings: true },
			plugins: [terser()],
			banner
		}
	],
	plugins: [
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
		production && terser(), // minify, but only in production
		babel({
			exclude: "node_modules/**",
		}),
	]
};