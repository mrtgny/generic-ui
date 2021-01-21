import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import path from 'path'
import resolve from "rollup-plugin-node-resolve";
import postcss from 'rollup-plugin-postcss'

export default {
    input: pkg.source,
    output: [
        {file: pkg.main, format: 'cjs'},
        {file: pkg.module, format: 'esm'}
    ],
    watch: {
        include: [pkg.source, "src/*"],
        exclude: 'node_modules/**'
    },
    plugins: [
        external({
            includeDependencies: true
        }),
        resolve(),
        postcss({
            minimize: true,
            extensions: ['.css'],
            extract: path.resolve('dist/bundle.css')
        }),
        babel({
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        del({targets: ['dist/*']}),
    ],
    external: Object.keys(pkg.peerDependencies || {})
};
