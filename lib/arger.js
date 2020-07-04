function arger(args){
    let res = {
        flags : [],
        values : {},
        unsorted : []
    }
    if(args[0].endsWith('node')){
        res.runner = args[0]
        res.scriptPath = args[1]
        args = args.slice(2)
        args.forEach(arg => {
            if(arg.startsWith('--')){
                res.flags.push(arg)
            }
            else if(arg.includes(':')){
                arg = arg.split(':')
                res.values[arg[0]] = arg[1]
            }
            else{
                res.unsorted.push(arg)
            }
        })
        return res 
    }
    
}



module.exports = arger