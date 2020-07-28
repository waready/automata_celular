const generations=[]
    var num = parseInt(prompt("Ingresa La Regla"))
    var result= num.toString(2)
    console.log(result);
    var completar=[];
    var datex;
    if (result.length <= 8){
        datex = 8 - result.length;
        console.log('tag', datex)
        for(let i =0; i< datex; i++){
            completar.push(0);
            console.log('tag', completar)
        }
        for (let k = 0; k<result.length; k++){
            completar.push(parseInt(result[k]))
        }
        console.log('tag', completar)
    }
    
const rules ={
    '000': completar[7],
    '001': completar[6],
    '010': completar[5],
    '011': completar[4],
    '100': completar[3],
    '101': completar[2],
    '110': completar[1],
    '111': completar[0],
}

const genLength = 64
function setup(){
    const canvas = createCanvas(800, 800);
    canvas.parent('#canvasHolder');

    const generation1 =[];

    for (let i=0; i<genLength; i++){
        generation1.push( i === genLength/2 ?1 :0   )
    }
    generations.push(generation1)
    setInterval(nextGeration,250)
}

function draw(){
    background(0)
    let s = width / genLength;
    fill(255)
    for (let j =0;j< generations.length; j++){
        const gen = generations[j]
        for(let i=0;i<gen.length;i++){
            if(gen[i] === 1){
                rect(i*s, j*s,s,s)
        
            }
        }
    }
}

function nextGeration(){
    const lastGen = generations[generations.length -1]
    const nextgen = []
    for (let i=0; i< lastGen.length; i++){
        let rule = ''
        for (let j = i-1; j<=i+1; j++){
            if(j < 0 || j >= lastGen.length){
                rule += '0'
            }else {
                rule += lastGen[j]
            }
        }
        nextgen.push(rules[rule])
    }
    generations.push(nextgen)

    if (generations.length > 32){
        generations.shift()
    }
}
