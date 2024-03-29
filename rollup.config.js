import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from "rollup-plugin-dts";

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
            nodeResolve({extensions: ['.js', '.jsx', '.tsx']}),
            commonjs(),
            typescript({tsconfig: './tsconfig.json'}),
            postcss({
                extensions: ['.css'],
                modules: {
                    scopeBehaviour: 'global',
                },
                sourceMap: true,
                extract: true
            }),
            terser()
        ],
    },
    {
        input: "dist/esm/index.d.ts",
        output: [{file: "dist/index.d.ts", format: "esm"}],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
];
