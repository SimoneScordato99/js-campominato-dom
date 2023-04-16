/*
ad azione di pulsante gioca && select 
    stampare 100 81 e 49 caselle







*/


//     variabili
let btnGioca = document.getElementById('btnGioca')
let difficolta = parseInt(document.getElementById('difficoltaGioco').value)
let posizioneBombe = bombe()
console.log(posizioneBombe)
//click bottone gioca funzione
btnGioca.addEventListener('click' , function(){
    
    let difficolta = parseInt(document.getElementById('difficoltaGioco').value);
    console.log(difficolta)
    //ciclo for che stampa caselle in base al valore della difficoltà e con numero interno pari alla difficoltà
    let arrayDiv = []
    for(let i = 0 ; i < difficolta; i++){
        let container = document.querySelector('.container')
        // console.log(container)
        let newDiv = container.innerHTML += `<div id="a${i}" class="quad quad-${difficolta} newDiv">${i+1}</div>`
        arrayDiv.push(i+1)
    }
    console.log(arrayDiv)
    for(let k=0;k<difficolta;k++){
        document.querySelector(`#a${k}`).addEventListener('click', function(){
            document.querySelector(`#a${k}`).classList.add('clicked')
            
            

            if(posizioneBombe.includes(arrayDiv[k])){
                console.log('maiale')
                document.querySelector(`#a${k}`).classList.remove('clicked')
                document.querySelector(`#a${k}`).classList.add('bomb')
                document.querySelector(`#a${k}`).innerHTML=`<i class="fa-solid fa-bomb fa-shake" style="color: #ff0000;"></i>`
                 
            }
        })
    }
    
    

});
    //creazione bombe
// console.log(bombe)
function bombe(){
    let arrayBombe = []
    let difficolta = parseInt(document.getElementById('difficoltaGioco').value)
    console.log(difficolta)
    for(let j=0; j<16; j++){
        let randomNumber = random(1 , difficolta )
        
        if(!arrayBombe.includes(randomNumber)){
            arrayBombe.push(randomNumber)
        } else if(!arrayBombe==j){
            if(!arrayBombe.includes(randomNumber)){
                arrayBombe.push(randomNumber)
            }
        }
    }

    return arrayBombe;
}






function random(min , max) {
    return Math.floor(Math.random()*max) + min
}



