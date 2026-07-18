// get an arry of the holes
let holes = document.querySelectorAll(".hole");

//variable to keep track of the score
let score = 0;

// varaible to keep track of the last hole
let lastHole;

// varaible to keep track of when timer is up
let timesUp = false;

// shortcut to score div
let spnScore = document.getElementById("spnScore");

// function to play game
function playGame() {
    // reset score to 0
    score = 0;

    // reset scoreboard
    spnScore.textContent = score;

    // reset timesUp
    timesUP = false;

    // popUp will run the game
    popUp();

    // setup how long the game will run for
    // set to run for 5 seconds
    setTimeout(function() {
        timesUp = true;
    }, 10000);
}

// have a bot popup
function popUp() {
    let randomTime = getRandomTime(200, 1000);
    let randomHole = getRandomHole(holes);

    // add bot class
    randomHole.classList.add("bot");

    setTimeout(function() {
        randomHole.classList.remove("bot");

        if (!timesUp) {
            popUp();
        }
    }, randomTime);
}

// get random time
function getRandomTime(minTime, maxTime) {
    return Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
}

// get random hole
function getRandomHole(holesArray) {
    let newRandomHole = Math.floor(Math.random() * holesArray.length);

    // set up holes variable
    let hole = holesArray[newRandomHole];

    // if selected hole is the same as last hole, try again
    if (hole == lastHole) {
        return getRandomHole(holesArray);
    }

    lastHole = hole;

    return hole;
}

// setup function to keep score
function whack(event) {
    if (this.classList.contains("bot")) {
        score++;

        //remove the bot
        this.classList.remove("bot");

        //update scoreboard
        spnScore.textContent = score;
    }
    else {
        score--;
        spnScore.textContent = score;
    }
}

holes.forEach(hole => hole.addEventListener("click", whack));