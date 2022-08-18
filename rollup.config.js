import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';
import { terser } from 'rollup-plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';
import copy from 'rollup-plugin-copy';

const packageJson = require('./package.json')

export default [
    {
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
                sourcemap: true,
            },
        ],
        plugins: [
            excludeDependenciesFromBundle({ peerDependencies: true, dependencies: true }),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser(),
            copy({
                targets: [
                    { src: 'node_modules/antd/dist/antd.min.css', dest: 'styles', rename: 'default.css' },
                    { src: 'node_modules/antd/dist/antd.dark.min.css', dest: 'styles', rename: 'dark.css' },
                    { src: 'node_modules/antd/dist/antd.compact.min.css', dest: 'styles', rename: 'compact.css' },
                ],
            }),
            visualizer(),
        ],
    },
    {
        input: 'dist/esm/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
    },
]
