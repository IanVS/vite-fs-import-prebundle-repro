This is a minimal reproduction of an issue observed in https://github.com/storybookjs/builder-vite/pull/305, 
wherein importing a file from `/@fs/` does not resolve to the same import as a normal bare import of the same module.
In this case, I've patched `left-pad` to console.log a statement, and I import it twice, once with each method, 
from a virtual module created by `codegen.js`.  The bare import works fine (it's pre-bundled and converted to esm),
but the `/@fs/` import is not pre-bundled/converted, and fails due to the cjs syntax.  Maybe that's expected behavior?

Run `npm install` then `npm start`, check the console.
