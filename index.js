const computer= document.getElementById('computer')
const user= document.getElementById('user')
const result= document.getElementById('result')
const possibleChoices=document.querySelectorAll('button')
let userChoice;
let computerChoice;
let finalResult
possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click', (e)=>{
    console.log(e);
    userChoice=e.target.id;
    user.innerHTML=userChoice;
    generateComputerchoice()
    getResult()
}))
// let arr=["siccor","paper","rock"]

function generateComputerchoice(){
    const randomNumber= Math.floor(Math.random()*3)
    // return arr[randomNumber];
    // can also use possibleChoices.length
    if(randomNumber===0){
        computerChoice='Rock'
    }
    if(randomNumber===1){
        computerChoice='Paper'
    }
    if(randomNumber===2){
        computerChoice ='Scissors'
    }
    computer.innerHTML=computerChoice
}

function getResult(){
    if(computerChoice===userChoice){
        finalResult = 'its a draw'
    }
    if(computerChoice==='Rock' && userChoice==="Paper"){
        finalResult = 'You win !'
    }
    if(computerChoice==='Rock' && userChoice==="Scissors"){
        finalResult = 'You lost !'
    }
    if(computerChoice==='Paper' && userChoice==="Scissors"){
        finalResult = 'You win !'
    }
    if(computerChoice==='Paper' && userChoice==="Rock"){
        finalResult = 'You lost !'
    }
    if(computerChoice==='Scissors' && userChoice==="Rock"){
        finalResult = 'You win !'
    }
    if(computerChoice==='Scissors' && userChoice==="Paper"){
        finalResult = 'You lost !'
    }
    result.innerHTML = finalResult

}