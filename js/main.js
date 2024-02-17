function Play(){
    // const firstPart = document.getElementById('first-part');
    // firstPart.classList.add('hidden');
    hiddenSection('first-part');
    showSection('second-part');

    // const secondPart = document.getElementById('second-part');
    // secondPart.classList.remove('hidden')
    continuesGame()
}

function continuesGame(){
    const alphabet = alphabetRandom();
    console.log(alphabet)
}