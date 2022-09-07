#!/usr/bin/env node
const path = require('path');
const cpy = require('cpy');

const root = path.resolve(__dirname, '..');

/**
 * Copy files to 'dist' directory
 */
const copyFiles = () => {
  const distDir = path.relative(root, 'dist');
  const schemaFiles = path.relative(distDir, path.join(root, 'src', '**', '*.graphql'));

  return Promise.all([cpy(schemaFiles, distDir, { cwd: distDir, parents: true })]);
};

/**
 * Main function
 */
const main = async () => {
  try {
    await copyFiles();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

// GO!
main().then(() => process.exit(0));
