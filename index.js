const { createServer } = require('vite');
const plugin = require('./plugin');

const config = {
  server: {
    port: 9000,
    open: true,
  },
  root: __dirname,
  optimizeDeps: {
    include: ['left-pad']
  },
  plugins: [
    plugin(),
  ]
};

(async function foo() {
  const server = await createServer(config);

  await server.listen()
})()

