$(document).ready(function () {
    updateGameboard();
    updateStatement();
    updateController();
});
// Global variables
var controller = {};

function updateController() {
    return $.ajax({
        method: "GET",
        url: "/json",
        dataType: "json",
        success: function (response) {
            controller = response;
        }
    });
}


function getRequest(url) {
    return $.ajax({
        method: "GET",
        url: url,
        dataType: "json",

        success: function (response) {
            controller = response;
        },
        error: function (response) {
            console.error(response);
        }
    });
}

function postRequest(method, url, data) {
    return $.ajax({
        method: method,
        url: url,
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",

        success: function (response) {
            controller = response;
        },
        error: function (response) {
            console.error(response);
        }
    });
}

function validateForm(assignmentForm) {

    let n = 0;

    if (document.assignmentForm.player_1.value === "") {
        ++n;
    }
    if (document.assignmentForm.player_2.value === "") {
        ++n;
    }
    if (document.assignmentForm.player_3.value === "") {
        ++n;
    }
    if (document.assignmentForm.player_4.value === "") {
        ++n;
    }
    if (n > 2) {
        Swal.fire({
            color: 'green',
            icon: 'error',
            title: 'Oops...',
            text: 'Bitte mindestens 2 Spieler eintragen!'
        })
        return false;
    } else {

        return true;

    }
}


function win(winner) {
    Swal.fire({
        title: 'Herzlichen Glückwunsch ' + winner + 'du hast gewonnen',
        width: 1000,
        padding: '3em',
        backdrop: `
    rgba(0,0,123,0.4)
    url('https://i.ibb.co/tBQpBgD/trump.gif')
    left top
    repeat
  `
    })
}

function response(res) {
    // returns an array of the values from the dice
    console.log(res)
}

function rollDiceWithoutValues() {
    const element = document.getElementById('dice-box1');
    const numberOfDice = 4//+document.getElementById('number1').value;
    const options = {
        element, // element to display the animated dice in.
        numberOfDice, // number of dice to use
        callback: response
    }
    rollADie(options);
}

function rollDiceWithValues() {
    const element = document.getElementById('dice-box1');
    const numberOfDice = +document.getElementById('number2').value;

    const valuesToThrow = document.getElementById('values2').value.split(',').map(val => Number(val));
    const options = {
        element, // element to display the animated dice in.
        numberOfDice, // number of dice to use
        values: valuesToThrow, // values to throw. When provided, overides library generated values. Optional.
        callback: response
    }
    rollADie(options);
}

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.getElementById('section').classList.toggle('bright')
    document.getElementById('form').classList.toggle('bright')
    document.getElementById('card1').classList.toggle('bright')
    document.getElementById('card2').classList.toggle('bright')
    document.getElementById('gamerules').classList.toggle('bright')
    document.getElementById('rules-main').classList.toggle('bright')
    document.getElementById('rules-toggler').classList.toggle('bright')


});

const checkbox2 = document.getElementById('checkbox-rules')

checkbox2.addEventListener('change', () => {
    document.getElementById('rules-main').classList.toggle('visually-hidden')
    document.getElementById('arrow').classList.toggle('up')
});


function rollDiceWithoutValues() {
    const element = document.getElementById('dice-box1');
    const numberOfDice = 4//+document.getElementById('number1').value;
    const options = {
        element, // element to display the animated dice in.
        numberOfDice, // number of dice to use
        callback: response
    }
    rollADie(options);
}

function process(source) {
    let input = source.getAttribute("gameInput");

    postRequest("POST", "/json", {"data": input}).then(() => {
            updateGameboard();
            updateStatement();
    })
}

function updateStatement() {
    updateController().then(() => {
        $('#statement').html(controller.statement)

    })
}

function updateGameboard() {
    updateController().then(() => {

        for (let k = 0; k < 132; ++k) {

            let cellSelector = $('#' + k)
            let playerNumber = controller.cells[k].playerNumber;
            let figureNumber = controller.cells[k].figureNumber;
            let hasWall = controller.cells[k].hasWall;
            let possibleCell = controller.cells[k].possibleCell;
            let gameState = controller.gameState;
            let cellNumber = controller.cells[k].cellNumber;

            cellSelector.empty();

            if (playerNumber !== 0 && !hasWall) {
                if (possibleCell) {
                    cellSelector.html('<div gameInput="' + cellNumber + '" class="figure-' + playerNumber + '-circle" onClick="process(this)"></div>')
                } else {
                    cellSelector.html('<div gameInput="' + playerNumber + ' ' + figureNumber + '" class="figure-' + playerNumber + '" onClick="process(this)"></div>')
                }
            } else {
                if (hasWall) {
                    if (possibleCell) {
                        cellSelector.html('<div gameInput="' + cellNumber + '" class="wall-circle" onClick="process(this)"></div>')
                    } else {
                        cellSelector.html('<div gameInput="' + cellNumber + '" class="wall" onClick="process(this)"></div>')
                    }
                } else {
                    if (possibleCell) {
                        cellSelector.html('<div gameInput="' + cellNumber + '" class="possible-cell" onClick="process(this)"></div>')
                    }
                    if (gameState === "5") {
                        cellSelector.html('<div gameInput="' + cellNumber + '" class="possible-wall" onClick="process(this)"></div>')
                    }
                }
            }

        }

    })
}


