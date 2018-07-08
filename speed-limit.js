const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let data = []

const calc = () => {
    let done = false
    while(!done){
        let dataPoints = parseInt(data.shift(),10)
        let miles = 0
        let time = 0
        for(let i = 0; i < dataPoints; i++){
            let str = data.shift().split(' ')
            let elap = parseInt(str[1],10)
            miles += parseInt(str[0],10) * (elap - time)
            time = elap
        }
        console.log(`${miles} miles`)
        if(data.length === 0)
            done = true
    }
}

rl.on('line', input => {
    if(input === '-1'){
        calc()
        rl.close()
    }else{
        data.push(input)
    }
})