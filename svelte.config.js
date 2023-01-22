import fs from "fs";
import path from "path";
import adapterStatic from "@sveltejs/adapter-static";
import svg from "vite-plugin-svgstring";
import dsv from "@rollup/plugin-dsv";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";

const { thedivtagguy } = JSON.parse(fs.readFileSync("package.json", "utf8"));
const dev = process.env.NODE_ENV === "development";
const dir = thedivtagguy ? thedivtagguy.subdirectory : "";
const prefix = dir.startsWith("/") ? "" : "csgs.ashoka.edu.in";
const base = dev || !dir ? "" : `${prefix}${dir}`;

const preprocess = sveltePreprocess({
  postcss: {
    plugins: [autoprefixer]
  }
});

const config = {
  preprocess,
  kit: {
    adapter: adapterStatic(),
    target: "#svelte",
    vite: {
      resolve: {
        alias: {
          $actions: path.resolve("./src/actions"),
          $components: path.resolve("./src/components"),
          $data: path.resolve("./src/data"),
          $stores: path.resolve("./src/stores"),
          $styles: path.resolve("./src/styles"),
          $svg: path.resolve("./src/svg"),
          $utils: path.resolve("./src/utils"),
          $blocks: path.resolve("./src/components/Blocks"),
        }
      },
      plugins: [dsv(), svg()],
    },
    paths: {
      base,
   assets: base ? `https://csgs.ashoka.edu.in/qurbatein/issue-1` : "https://csgs.ashoka.edu.in/qurbatein/issue-1",
   // assets: base ? `https://amanbhargava.in/qurbatein/issue-1` : "https://amanbhargava.in/qurbatein/issue-1",
    }
  }
};

export default config;

