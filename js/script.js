function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
} else if(argMoveId == 2){
    return 'papier';
} else if(argMoveId == 3){
    return 'nożyce';
} else {
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}
let computerMove = 'kamień';

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let playerMove = 'papier';

printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

/*if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
    computerMove = 'papier';
} else (randomNumber == 3){
    computerMove = 'nożyce';
}*/
let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else(playerInput == '31'){
    playerMove = 'nożyce';
}*/
let playerMove = getMoveName(randomNumber);

printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Komputer wygrywa!');
}else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!');
}else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
}else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Komputer wygrywa!');
}else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
}else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Komputer wygrywa!');
}else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('ty wygrywasz!');
}else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!');
}else( argComputerMove == argComputerMove && argPlayerMove == 'nieznany ruch'){
    printMessage('Blędna Liczba!');
}
}