const glob = require('glob');
const files = glob.sync('./**/*.function.js', { cwd: __dirname });
for(let f = 0, fl = files.length; f < fl; f++){
    const file = files[f];
    const funcName = file.split('/').pop().slice(0, -12);
    console.log(funcName);
    if(!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === funcName){
        exports[funcName] = require(file);
    }
}