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

function createTableRatingPlayers(players, obj) {
  const bodyRow = document.createElement("tbody");
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
    DOM.playerRating.appendChild(dataRow);
  });
}

const tbodyRating = createTableRatingPlayers(players, gameDate);
