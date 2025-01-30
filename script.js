const players = [
{ name: "TRELLGODDDD", score: 150, level: 3 },
{ name: "Teluk", score: 200, level: 5 },
{ name: "Chachi", score: 120, level: 2 },
{ name: "Seven", score: 180, level: 4 },
{ name: "Capsi", score: 220, level: 6 },
{ name: "Chawi", score: 130, level: 2 },
{ name: "Wadu", score: 170, level: 3 },
{ name: "Zig", score: 190, level: 5 },
{ name: "Iya", score: 160, level: 4 },
{ name: "trelltzy", score: 210, level: 6 },
];

function displayPlayers() {
const playerBody = document.getElementById('playerBody');
playerBody.innerHTML = ''; // Clear existing rows

players.forEach(player => {
const row = document.createElement('tr');
row.innerHTML = `<td>${player.name}</td><td>${player.score}</td><td>${player.level}</td>`;
playerBody.appendChild(row);
});
}

function sortPlayers(criterion) {
players.sort((a, b) => {
if (criterion === 'name') {
return a.name.localeCompare(b.name);
} else if (criterion === 'score') {
return b.score - a.score; // Sort descending
} else if (criterion === 'level') {
return b.level - a.level; // Sort descending
}
});
displayPlayers();
}

// Initial display
displayPlayers();
