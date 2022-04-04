const { normalizePath } = require('vite');

async function generateCode() {
  const resolvedLeftPad = normalizePath(require.resolve('left-pad'));

  const code = `
    import 'left-pad';
    import '/@fs/${resolvedLeftPad}';

    `.trim();
  return code;
}


module.exports = generateCode;
