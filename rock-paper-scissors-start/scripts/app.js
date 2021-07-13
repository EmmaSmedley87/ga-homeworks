// * Remember to run "go live" below to see your changes on save.

// When a user makes their choice (rock, paper or scissors), you should also randomly generate a computer choice
// Write some logic to determine who has won
// Display the player's choice and the computer's choice
// Display the winner on the page
// When the reset button is clicked, clear the choices and the winner from the screen

// **Note:** Remember to wrap your code in a `DOMContentLoaded` event listener.

// * write all your code INSIDE the function below
function init() {

const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('#computer-score')
const yourScoreSpan = document.querySelector('#your-score')
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'sissors'
    },

    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    },

    {
        name: 'sissors',
        emoji: '✌️',
        beats: 'paper'
    },
]

let selection = null
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName =selectionButton.dataset.selection
        selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selectionName)
    })
})

let yourWinner = null
let computerWinner = null
let computerSelection = null
function makeSelection(selection) {
computerSelection = randomSelection()
yourWinner = isWinner(selection, computerSelection)
computerWinner = isWinner(computerSelection, selection)
console.log(computerSelection)
}

addSelectionResult(computerSelection, computerWinner)
addSelectionResult(selection, yourWinner)
if (yourWinner) incrementYourScore(yourScoreSpan)
if (computerWinner) incrementComputerScore(computerScoreSpan)


function incrementYourScore(yourScoreSpan) {
    yourScoreSpan.innerText = parseInt(yourScoreSpan.innerText) + 1
}

function incrementComputerScore(computerScoreSpan) {
    computerScoreSpan.innerText = parseInt(computerScoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)

}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}
}

// ! do not touch below here
window.addEventListener('DOMContentLoaded', init)
