import an from "./lib/index.js";
import "@babel/register";
import plugins from "./plugins/index.js";
import hello from "./hello.js";
// require = require("esm")(module /*, options*/);
an({ ...plugins, "Hello": hello });
