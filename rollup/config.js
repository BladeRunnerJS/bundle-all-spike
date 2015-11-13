import npm from 'rollup-plugin-npm';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';

// TODO: enable the babel plugin and set `jsnext` to `true`
export default {
	entry: 'rollup/index.js',
  format: 'iife',
  moduleName: 'npm',
  plugins: [
		commonjs(),
    npm({jsnext: false, main: true}),
		// babel({sourceMap: true}),
    replace({'process.env.NODE_ENV': JSON.stringify('production')})
  ]
};
