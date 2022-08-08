import path from 'path'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import alias from '@rollup/plugin-alias'
import copy from 'rollup-plugin-copy-assets'
import commonjs from '@rollup/plugin-commonjs'

const config = {
  inlineDynamicImports: true,

  external: ['vue'],

  input: 'src/index.js',

  output: [
    // {
    //   format: 'cjs',
    //   file: 'dist/js/bundle.cjs.js'
    // },
    {
      format: 'esm',
      file: 'dist/js/bundle.esm.js',
      // dir: 'dist',
      // preserveModules: true,
      // preserveModulesRoot: 'src'
    }
  ],

  plugins: [
    alias({
      entries: {
        ['@']: path.resolve(__dirname, 'src')
      }
    }),
    commonjs(),
    vue(),
    scss(),
    copy({ assets: ['src/assets'] })
  ]
}

export default config
