#!/bin/node 
const fs = require('fs'),
      arger = require('./lib/arger'),
      nodeSass = require('node-sass')

var args = arger(process.argv),
outDir = ''
if(args.values['outDir'])outDir = args.values.outDir

files = [...args.unsorted.map(arg => {return {name : arg, data : fs.readFileSync(arg).toString()}})]

if(args.flags.includes('--w') || args.flags.includes('--watch')){
    console.log('Watching mode enabled.')
    files.forEach(file => {
        fs.watch(file.name, v=>{
            compile(file.data, file.name)
        })
    });
}
else{
    files.forEach(file => compile(file.data, file.name));
}


function compile(data, name){
    console.log(data);
    
    var defines = [...data.match(/\$(.*)\s*\:\s*(.*)/g) || '']
    defines.forEach(d =>{
        d = d.split(':')
        data = data.replace(d[0], `--${d[0].split('$')[1]}`) 
    })

    var uses = [...data.match(/\$(.*)(\;?)/g) || '']
    uses.forEach(use=>{
        use = use.split(';')[0]
        data = data.replace(use, `var(--${use.split('$')[1]})`) 
    })
    name = name.split('.')
    name.pop()

    if(args.flags.includes('--r') || args.flags.includes('--replace')){
        name.push('c')
        name.push('scss')
        name = name.join('.')
        fs.writeFileSync(`${outDir ? `${outDir}/` : ''}${name}`, data)
    }else{
        var out = nodeSass.renderSync({
            data,
        })
        name.push('css')
        name = name.join('.')
        fs.writeFileSync(`${outDir ? `${outDir}/` : ''}${name}`, out.css.toString())
    }
   
    console.log('Compiled to file ' + name);
    
}

