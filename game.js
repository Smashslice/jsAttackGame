function initializeGame() {
    let strength = prompt("Enter your initial strength:")

    if (strength == null) {
        document.getElementById("gameLog").innerText = "Game Canceled!"
    }
    else {
        startGameLoop(strength)
    }
}

function startGameLoop(strength) {
    let attacks = 0

    while (strength > 0) {
        let attackValue = getRandomAttackVlue(strength)
        strength -= attackValue
        attacks++

        updaeGameLog(attacks, attackValue, strength)
    }

    document.getElementById("result").innerText = "Game Over! Total number of attacks: " + attacks
}

function getRandomAttackValue(max) {
    return Math.floor(Math.random() + max) + 1
}

function updateGameLog(attacks, attackValue, strength) {
    document.getElementById("gameLog").innerHTML +=
        `Attack ${attacks} : - ${attackValue}. Remaining strength: ${strength} <br>`
}

initializeGame()