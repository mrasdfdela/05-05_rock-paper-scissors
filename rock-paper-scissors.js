function initGame() {
    scores = {'player': 0, 'computer':0}

    buttons = document.querySelectorAll('button')
    buttons.forEach( (button) => {
        button.addEventListener('click', () => {
            playerSelection = button.getAttribute('id')
            if (scores['player'] < 5 && scores['computer'] < 5) {
                playRound(playerSelection, computerPlay(), scores)
            }
        })
    })
}
    
function playRound(playerSelection, computerSelection, scores) {
    p = playerSelection
    c = computerSelection
    
    if (p == c) {
    } else if (p == 'rock') {
        c == 'scissors' ? scores['player'] += 1 : scores['computer'] += 1
    } else if (p == 'scissors') {
        c == 'paper' ?  scores['player'] += 1 : scores['computer'] += 1
    } else if (p == 'paper') {
        c == 'rock' ? scores['player'] += 1 : scores['computer'] += 1
    }

    updateScore(scores)
    updateMessage(p,c,scores)
}
function computerPlay() {
    arr = ['rock','paper','scissors']
    num = ( Math.floor( Math.random() * arr.length ) )
    return arr[num]
}

function updateScore(scores) {
    docScores = document.querySelectorAll('span')
    docScores.forEach( (el)=> {
        elId = el.getAttribute('id')
        document.querySelector(`#${elId}`).textContent = scores[elId]
    })

    if (scores['player'] >= 5) {

    }
}
function updateMessage(p, c, s) {
    m = document.querySelector('h3')
    m.textContent = `Player selects ${p} / Computer selects ${c}`

    if (s['player'] >= 5) {
        mWinner = document.createElement('div')
        mWinner.textContent = 'Player Wins!'
        m.appendChild(mWinner)
    } else if (s['computer'] >= 5) {
        mWinner = document.createElement('div')
        mWinner.textContent ='Computer Wins >=D'
        m.appendChild(mWinner)
    }
}

initGame()