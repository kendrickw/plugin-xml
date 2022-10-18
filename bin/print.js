#!/usr/bin/env node

import fs from "fs";
import prettier from "prettier";

import plugin from "../src/plugin.js";

const code = fs.existsSync(process.argv[2])
  ? fs.readFileSync(process.argv[2], "utf-8")
  : process.argv.slice(2).join(" ").replace(/\\n/g, "\n");

const options = {
  parser: "xml",
  plugins: [plugin],
  xmlWhitespaceSensitivity: "ignore",
  embeddedLanguageFormatting: "auto"
};

console.log(prettier.format(code, options));