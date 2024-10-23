import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import  terser  from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs', // CommonJS format
        sourcemap: false,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm', // ES Module format
        sourcemap: false,
      },
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: './dist/types',
      }),
      commonjs(),
      nodeResolve(),
      terser(),
    ],
    external: ['axios', 'tslib'], // External dependencies
  },
];
