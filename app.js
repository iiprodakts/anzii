// import {createRequire} from 'module'
// const require = createRequire(import.meta.url)
import anzii from "anzii"
import plugins from "./plugins/index.js";
import hello from "./hello.js";
// require = require("esm")(module /*, options*/);
anzii({ ...plugins, "Hello": hello });


