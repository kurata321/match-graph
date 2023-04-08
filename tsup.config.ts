import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["src/**/*.tsx", "!src/**/*.stories.tsx", "!src/**/*.stories.mdx"],
  format: ["esm"],
  dts: true,
  tsconfig: './tsconfig.json',
  minify: true,
  clean: true,
  external: ["react"],
  ...options,
}));

