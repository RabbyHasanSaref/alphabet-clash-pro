function hiddenSection(elementid){
    const elementById = document.getElementById(elementid);
    elementById.classList.add('hidden');
}

function showSection(elementid){
    const elementById = document.getElementById(elementid);
    elementById.classList.remove('hidden');
}

function alphabetRandom(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArr = alphabet.split('');
  
    const randomNumber = Math.random()*25;
    const roundNumber = Math.round(randomNumber);
    const alphabets = Math.round(roundNumber);

    const alphabetletter = alphabetArr[alphabets]
    return alphabetletter;
}