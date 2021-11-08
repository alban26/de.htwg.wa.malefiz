// import swal from 'sweetalert';
function process(input) {
    console.log(input)

    fetch('/command/' + input, {
        method: 'post',
    }).then(() => {
        if (input === 'some') {
            rollDiceWithoutValues()
            window.setTimeout(function () {
                location.replace("/newGame")
            }, 2000)
        } else if (input === '131') {
            win();
            // window.location.replace("/");
        } else {
            window.location.replace("/newGame");
        }
    })//.then(()  => window.location.reload());
}


function validateForm(assignmentForm) {

    var n = 0;

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


function win() {
    Swal.fire({
        title: 'Herzlichen Glückwunsch du hast gewonnen',
        width: 1000,
        padding: '3em',
        backdrop: `
    rgba(0,0,123,0.4)
    url('https://c.tenor.com/8zkQEAZZmhYAAAAC/squidward-spongebob-squarepants.gif')
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
