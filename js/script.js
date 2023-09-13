function getCountGamePlayer(name, obj) {
  let gameCount = 0;
  obj.forEach((games) => {
    games.players.forEach((player) => {
      if (player.player == name) {
        gameCount++;
      }
    });
  });
  return gameCount;
}

function getCountWinGamePlayer(name, obj) {
  let gameWinCount = 0;
  obj.forEach((games) => {
    games.players.forEach((player) => {
      if (player.player == name && player.points == 1) {
        gameWinCount++;
      }
    });
  });
  return gameWinCount;
}

function getWinRating(player, obj) {
  let gameRating = 0;
  let gameWinCount = getCountWinGamePlayer(player, obj);
  let gameCount = getCountGamePlayer(player, obj);
  if (gameWinCount != 0) {
    gameRating = (gameWinCount / gameCount) * 100;
  }
  gameRating += "%";
  return gameRating;
}

function createTableRatingPlayers(structure, players, obj) {
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");

  // Create table header row
  const keys = Object.values(structure);
  for (const key of keys) {
    const headerCell = document.createElement("th");
    headerCell.textContent = key;
    headerRow.appendChild(headerCell);
  }
  table.appendChild(headerRow);

  // Create table data rows
  players.forEach(function (player) {
    const dataRow = document.createElement("tr");

    let dataCell = [
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
      document.createElement("td"),
    ];

    dataCell[0].textContent = player;
    dataCell[1].textContent = getCountGamePlayer(player, obj);
    dataCell[2].textContent = getCountWinGamePlayer(player, obj);
    dataCell[3].textContent = getWinRating(player, obj);

    dataCell.forEach(function (cell) {
      dataRow.appendChild(cell);
    });
    table.appendChild(dataRow);
  });
  return table;
}

const table = createTableRatingPlayers(
  structureTableRatingPlayers,
  players,
  gameDate
);

const tableContainer = document.getElementById("table-container");
tableContainer.appendChild(table);
