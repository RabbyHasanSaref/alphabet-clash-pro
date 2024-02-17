function Play(){
    hiddenSection('first-part');
    hiddenSection('thred-part')
    showSection('second-part');
    getLifeScoreValue('life', 5);
    getLifeScoreValue('score', 0)
    continuesGame()
}

function continuesGame(){
    const alphabet = alphabetRandom();
    const artShow = document.getElementById('art-show');
    artShow.innerText = alphabet;
    setKyeBgColor(alphabet);
}

document.addEventListener('keyup', handlerEventButton)
function handlerEventButton(event){
    const gamerPrass = event.key;
   const gamerPressElement = document.getElementById('art-show');
   const gamerePrassElementData = gamerPressElement.innerText;
   const gamerText = gamerePrassElementData.toLowerCase();
   if(gamerPrass === 'Escape'){
    gameOver();
    }
   if(gamerPrass === gamerText){
    const currentScore = getLifeScoreValueId('score');
    const updatedScore = currentScore + 1;
    getLifeScoreValue('score', updatedScore);

    removeKyeBgColo(gamerText);
    continuesGame()
   }
   else{
    const currentLife = getLifeScoreValueId('life');
    const updatedLife = currentLife - 1;
    getLifeScoreValue('life', updatedLife);

    if(updatedLife === 0){
        gameOver();
    }
   }
}

function gameOver(){
    hiddenSection('second-part')
    showSection('thred-part');

    const gameScore = getLifeScoreValueId('score');
    getLifeScoreValue('game-score', gameScore);
    
    const gameScores =  getLifeScore('art-show');
    removeKyeBgColo(gameScores);
}