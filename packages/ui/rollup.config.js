import css from "rollup-plugin-import-css";
import cssOnly from 'rollup-plugin-css-only'
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from 'rollup-plugin-copy';

export default {
    input: "src/index.ts",
    output: { 
        dir: "dist", 
        format: "esm",
        preserveModules: true,
		preserveModulesRoot: 'src',     
    },
    external: ['react', 'react-dom', 'clsx'],
    plugins: [ 
        css({}),
        typescript(), 
        resolve({ resolveOnly: [/^(?!react$|react-dom$)/] }), 
        commonjs(),
        copy({
            targets: [
              { src: 'src/styles/**/*', dest: 'dist' }
            ],
            flatten: false
        })
    ]
};