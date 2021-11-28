$(document).ready(function () {
    connectWebSocket();
});

var websocket = new WebSocket("ws://localhost:9000/websocket");
var controller = {};

async function postPlayers() {
    var formData = {
        "player_1": $("#player_1").val(),
        "player_2": $("#player_2").val(),
        "player_3": $("#player_3").val(),
        "player_4": $("#player_4").val()
    }

    websocket.send(JSON.stringify(formData))
    location.href = "/newGame"

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
    websocket.send(JSON.stringify({"data": input}))
}

function updateStatement() {
    $('#statement').html(controller.statement)
}

function updateGameboard() {
    for (let k = 0; k < 132; ++k) {

        let cellSelector = $('#' + k)
        let playerNumber = controller.cells[k].playerNumber;
        let figureNumber = controller.cells[k].figureNumber;
        let hasWall = controller.cells[k].hasWall;
        let possibleCell = controller.cells[k].possibleCell;
        let gameState = controller.gameState;
        let cellNumber = controller.cells[k].cellNumber;

        cellSelector.empty();

        cellSelector.addClass("field align-items-center justify-content-center d-flex")

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
}

function connectWebSocket() {
    websocket.onopen = (event) => {
        console.log("Connected to Websocket");
        websocket.send("connect");
    };

    websocket.onclose = () => {
        console.log("Connection with Websocket Closed!");
    };

    websocket.onerror = (error) => {
        console.log("Error in Websocket Occured: " + error);
    };

    websocket.onmessage = (e) => {
        if (typeof e.data === "string") {
            controller = JSON.parse(e.data);
            console.log("got data")
            updateGameboard();
            updateStatement();
        }
    };
}