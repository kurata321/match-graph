import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from "autoprefixer";

const packageJson = require('./package.json');

export default [
    {
        // preserveModules: true,
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
                name: 'MatchGraph'
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            external(),
            json(),
            nodeResolve({ extensions: ['.js', '.jsx', '.tsx'] }),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({
                extensions: ['.css']
            }),
            terser()
        ],
    },
];
