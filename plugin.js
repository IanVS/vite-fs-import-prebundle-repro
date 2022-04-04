const generateCode = require('./codegen');

const virtualFilename = '/virtual:/file.js';

function plugin() {
  return {
    name: 'code-generator-plugin',
    enforce: 'pre',
    resolveId(source) {
      if (source === virtualFilename) {
        return virtualFilename;
      }
    },
    async load(id) {
      if (id === virtualFilename) {
        return generateCode();
      }
    },
  };
}


module.exports = plugin;
