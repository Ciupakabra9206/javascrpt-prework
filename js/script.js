(function() {
  function playGame(playerInput){ 
    clearMessages();
    function getMoveName(argMoveId) {
      if(argMoveId === 1) {
        return 'kamień';
      } else if (argMoveId === 2) {
        return 'papier';
      } else if (argMoveId === 3) {
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }
  
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    
    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    let playerChosee;

    if (playerInput == 'kamień') {
      playerChosee = 1;
    } else if (playerInput == 'papier') {
      playerChosee = 2;
    } else if (playerInput == 'nożyce') {
      playerChosee = 3;
    }

    const playerMove = getMoveName(playerChosee)
    printMessage('Twój ruch to: ' + playerMove);
  
    function displayResult(argComputerMove, argPlayerMove){
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

      if ( argComputerMove === 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      } else if (argComputerMove === 'kamień' && argPlayerMove === 'nożyce') {
        printMessage('Komputer wygrywa!');
      } else if (argComputerMove === 'kamień' && argPlayerMove === 'kamień') {
        printMessage('Remis!');
      } else if (argComputerMove === 'papier' && argPlayerMove === 'papier') {
        printMessage('Remis!');
      } else if (argComputerMove === 'papier' && argPlayerMove === 'kamień') {
        printMessage('Komputer wygrywa!');
      } else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
        printMessage('Ty wygrywasz!');
      } else if (argComputerMove === 'nożyce' && argPlayerMove === 'papier') {
        printMessage('Komputer wygrywa!');
      } else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
        printMessage('ty wygrywasz!');
      } else if (argComputerMove === 'nożyce' && argPlayerMove === 'nożyce') {
        printMessage('Remis!');
      } else if (argComputerMove === argComputerMove && argPlayerMove === 'nieznany ruch') {
        printMessage('Blędna Liczba!');
      }
    }

    displayResult(computerMove, playerMove);

  } 

  const testButton1 = document.getElementById('play-rock');

  testButton1.addEventListener('click', function(){
    playGame('kamień')
  });

  const testButton2 = document.getElementById('play-paper');

  testButton2.addEventListener('click', function(){
    playGame('papier');
  });

  const testButton3 = document.getElementById('play-scissors');

  testButton3.addEventListener('click', function(){
    playGame('nożyce');
  });
})()
