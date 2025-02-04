const initialPlayers = [
    { name: "Trell", score: 150, level: 3 },
    { name: "Iya", score: 200, level: 5 },
    { name: "Zig", score: 120, level: 2 },
    { name: "Chawi", score: 180, level: 4 },
    { name: "Capsi", score: 220, level: 6 },
    { name: "Chachi", score: 130, level: 2 },
    { name: "Seven", score: 160, level: 3 },
    { name: "Wadu", score: 190, level: 5 },
    { name: "Harley", score: 170, level: 4 },
    { name: "Airo", score: 210, level: 6 }
];

let players = [...initialPlayers]; 

function displayPlayers() {
    const playerList = document.getElementById('playerList');
    playerList.innerHTML = '';
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `Name: ${player.name}, Score: ${player.score}, Level: ${player.level}`;
        playerList.appendChild(li);
    });
}

function sortPlayers() {
    const criteria = document.getElementById('sortCriteria').value;
    players.sort((a, b) => {
        if (criteria === 'name') {
            return a.name.localeCompare(b.name);
        } else if (criteria === 'score') {
            return b.score - a.score; 
        } else if (criteria === 'level') {
            return b.level - a.level; 
        }
    });
    displayPlayers();
}

function addPlayer(event) {
    event.preventDefault(); 
    const name = document.getElementById('playerName').value;
    const score = parseInt(document.getElementById('playerScore').value);
    const level = parseInt(document.getElementById('playerLevel').value);

    players.push({ name, score, level });
    displayPlayers();

    
    document.getElementById('playerForm').reset();
}


displayPlayers();
