export default function () {
    //api.cache(true); // this tells babel to cache it's transformations, it's pretty good at checking file hashes and invalidating it's cache, but if you have problems with changes not being reflected you can set false here.
    // const isESM = process.env.NODE_ENV === 'esm' ? true : false
    const presets = [
        
        ['@babel/preset-env',
         // this plugin tells babel to transpile your code for a specific runtime environment, we'll use node
        {
        targets: {
            node: '14.17.0', // this means transpile everything that node 14.17 (the version you get in lambda with node14) doesn't support
        },
        //modules: isESM ? false : 'cjs', // this means imports/exports will not be transformed
        }, ]
    ];
    const plugins = [ 
        ["transform-strict-mode", {
            "strict": false
        }
        ],"@babel/plugin-syntax-import-assertions","@babel/plugin-syntax-jsx",
        
    ];
  
    // if (process.env["NODE_MODE"] === "esm") {
    //   plugins.push("babel-plugin-add-import-extension, { extension: 'mjs', replace: true }");
    // }else{
    //   plugins.push("babel-plugin-add-import-extension, { extension: 'cjs', replace: true }");
    // }
  
    return {
      presets,
      plugins
    };
  }
  