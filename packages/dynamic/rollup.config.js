import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import postcssUrl from "postcss-url";
import { preserveDirectives } from "rollup-plugin-preserve-directives";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  external: ["react", "react-dom", "clsx", "lucide-react", "react-markdown"],
  plugins: [
    preserveDirectives(),
    postcss({
      extract: "styles.css",
      plugins: [
        postcssImport(),
        postcssUrl({
          url: "copy",
          useHash: false,
          assetsPath: "assets",
        }),
      ],
      modules: {
        generateScopedName: "[name]__[local]___[hash:base64:5]",
      },
    }),
    typescript(),
    resolve({ resolveOnly: [/^(?!react$|react-dom$)/] }),
    commonjs(),
  ],
};
